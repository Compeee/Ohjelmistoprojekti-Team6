package com.example.libraryapp.registration;

import lombok.*;

@Data
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
    private final String username;
    private final String password;
    private final String email;
}
