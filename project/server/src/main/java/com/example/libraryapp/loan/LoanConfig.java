package com.example.libraryapp.loan;

import com.example.libraryapp.book.Book;
import com.example.libraryapp.libraryUser.LibraryUser;
import com.example.libraryapp.libraryUser.LibraryUserRole;
import com.example.libraryapp.security.PasswordEncoder;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
@AllArgsConstructor
@Configuration
public class LoanConfig {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Bean
    CommandLineRunner commandLineLoanRunner(LoanRepository repository){
        return args -> {
            Loan loan1 = new Loan(1L, 1L);
            repository.saveAll(List.of(loan1));
        };
    }
}