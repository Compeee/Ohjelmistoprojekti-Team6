package com.example.libraryapp.loan;

import javax.persistence.*;

import com.example.libraryapp.book.Book;
import com.example.libraryapp.libraryUser.LibraryUser;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;


@AllArgsConstructor
@Entity
@Getter
@Setter
@Table
@NoArgsConstructor
public class Loan {
    @Id
    @SequenceGenerator(name = "loan_sequence", sequenceName = "loan_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "loan_sequence")
    private Long id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_book", referencedColumnName = "id")
    private Book book;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_user", referencedColumnName = "id")
    private LibraryUser libraryUser;

    private LocalDate startDate;

    private LocalDate endDate;

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Loan(Book book, LibraryUser libraryUser, LocalDate startDate, LocalDate endDate){
        this.book = book;
        this.libraryUser = libraryUser;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    
}
