package com.grupo13.Taller4.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
	
	
	@NotEmpty
	private String identifier;

	@NotEmpty
	private String password;
	

}