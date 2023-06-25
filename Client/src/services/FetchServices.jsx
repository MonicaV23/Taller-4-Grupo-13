const BASE_URL = 'http://localhost:8080';

const FetchServices = {};

FetchServices.login = async (identifier, password) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            identifier: identifier,
            password: password
        })
    });

    if (response.ok) {
        const {token} = await response.json();
        return token;
    }

    return undefined;
}

FetchServices.verifyToken = async (token) => {
    const response = await fetch(`${BASE_URL}/auth/whoami`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }

    return undefined;
}

FetchServices.getAllSongs = async (token, queryParam) => {
    const response = await fetch(`${BASE_URL}/song/${queryParam}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }

    return undefined;
}

export default FetchServices;