package com.example.libraryapp.book;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BookConfig  {
    @Bean
    CommandLineRunner commandLineRunner(BookRepository repository){
        return args -> {
            Book book1 = new Book("book", "Eero", 1999, "great book", "poetry", false );
            Book book2 = new Book("book2", "Eero", 1999, "great book", "poetry", false );
        };
    }
}