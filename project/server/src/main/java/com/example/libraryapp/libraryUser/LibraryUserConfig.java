package com.example.libraryapp.libraryUser;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Instant;
import java.util.List;

@Configuration
public class LibraryUserConfig  {
    @Bean
    CommandLineRunner commandLineLibraryUserRunner(LibraryUserRepository repository){
        return args -> {
            LibraryUser libraryUser1 = new LibraryUser("username1","email1","password1","user", Instant.now());
            LibraryUser libraryUser2 = new LibraryUser("username1", "email2","password2", "admin", Instant.now());
            repository.saveAll(List.of(libraryUser1,libraryUser2));

        };
    }
}