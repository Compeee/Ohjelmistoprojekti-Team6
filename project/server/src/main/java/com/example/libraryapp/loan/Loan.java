package com.example.libraryapp.loan;

import javax.persistence.*;

import com.example.libraryapp.book.Book;
import com.example.libraryapp.libraryUser.LibraryUser;

import java.time.LocalDate;



@Entity
@Table
public class Loan {
    @Id
    @SequenceGenerator(name = "loan_sequence", sequenceName = "loan_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "loan_sequence")
    private Long id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "book_id", referencedColumnName = "id")
    private Book book;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private LibraryUser libraryUser;

    private LocalDate startDate;

    private LocalDate endDate;


    public Loan() {

    }

    public Loan(Long id, Book book, LibraryUser libraryUser, LocalDate startDate, LocalDate endDate){
        this.id = id;
        this.book = book;
        this.libraryUser = libraryUser;
        this.startDate = startDate;
        this.endDate = endDate;

    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Loan(Book book, LibraryUser libraryUser, LocalDate startDate, LocalDate endDate){
        this.book = book;
        this.libraryUser = libraryUser;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public LibraryUser getLibraryUser() {
        return libraryUser;
    }

    public void setLibraryUser(LibraryUser libraryUser) {
        this.libraryUser = libraryUser;
    }

}
