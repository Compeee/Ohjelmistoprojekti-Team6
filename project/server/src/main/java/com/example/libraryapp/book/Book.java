package com.example.libraryapp.book;

import com.example.libraryapp.loan.Loan;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Book {

    @Id
    @SequenceGenerator(name = "book_sequence", sequenceName = "book_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_sequence")

    private Long id;
    private String title;
    private String author;
    private Integer year;
    private String description;
    private String genre;
    private Boolean on_loan;
    private String image;

    public Book(String title, String author, Integer year, String description, String genre, Boolean on_loan, String image) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.description = description;
        this.genre = genre;
        this.on_loan = on_loan;
        this.image = image;
    }


}
