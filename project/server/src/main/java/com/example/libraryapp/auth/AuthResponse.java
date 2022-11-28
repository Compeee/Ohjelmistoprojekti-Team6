package com.example.libraryapp.auth;

public record AuthResponse(Long id, String name, com.example.libraryapp.libraryUser.LibraryUserRole role) {

}
