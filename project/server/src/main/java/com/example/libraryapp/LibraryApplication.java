package com.example.libraryapp;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.libraryapp.book.Book;

@SpringBootApplication
@RestController
public class LibraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(LibraryApplication.class, args);
	}

	@GetMapping
	public List<Book> hello(){
		return List.of(new Book(1L, "book", "Eero", 1999, "great book", "poetry", false ));
	}

}

