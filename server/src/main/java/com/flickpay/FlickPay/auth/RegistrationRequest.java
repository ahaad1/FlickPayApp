package com.flickpay.FlickPay.auth;

import jakarta.persistence.Column;
import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class RegistrationRequest {
    @NotEmpty(message = "first name is mandatory")
    @NotBlank(message = "first name is mandatory")
    private String firstname;

    @NotEmpty(message = "last name is mandatory")
    @NotBlank(message = "last name is mandatory")
    private String lastname;

    @NotEmpty(message = "email is mandatory")
    @NotBlank(message = "email is mandatory")
    @Email(message = "email is not formatted")
    private String email;

    @NotEmpty(message = "password is mandatory")
    @NotBlank(message = "password is mandatory")
    @Size(min = 6, message = "6 characters minimum")
    private String password;
}
