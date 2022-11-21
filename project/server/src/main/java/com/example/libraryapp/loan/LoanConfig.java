package com.example.libraryapp.loan;

import com.example.libraryapp.book.Book;
import com.example.libraryapp.book.BookRepository;
import com.example.libraryapp.libraryUser.LibraryUser;
import com.example.libraryapp.libraryUser.LibraryUserRepository;
import com.example.libraryapp.libraryUser.LibraryUserRole;
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

            Loan loan1 = new Loan(new Book("book", "Eero", 1999, "great book", "poetry", false, "imglink"), new LibraryUser("loanuser1","loanemail1","loanpass1", LibraryUserRole.USER, Instant.now()), LocalDate.now(), LocalDate.now().plusMonths(1));
            repository.saveAll(List.of(loan1));


        };
    }
}