package com.example.libraryapp.loan;

import com.example.libraryapp.book.Book;
import com.example.libraryapp.libraryUser.LibraryUser;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

@Configuration
public class LoanConfig {

    @Bean
    CommandLineRunner commandLineLoanRunner(LoanRepository repository){
        return args -> {
          Loan loan1 = new Loan(new Book("book", "Eero", 1999, "great book", "poetry", false, "imglink"), new LibraryUser("username1","email1","password1","user", Instant.now()), LocalDate.of(2022, 11, 13), LocalDate.of(2022, 12, 13));
          repository.saveAll(List.of(loan1));
        };
    }
}
