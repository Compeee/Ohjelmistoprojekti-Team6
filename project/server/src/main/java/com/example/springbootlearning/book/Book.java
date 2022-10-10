package com.example.springbootlearning.book;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Book {

    @Id
    @SequenceGenerator(name = "book_sequence", sequenceName = "book_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_sequence")

    private Long id;
    private String title;
    private String author;
    private int year;
    private String description;
    private String genre;
    private boolean on_loan;

    public Book() {

    }

    public Book(Long id, String title, String author, int year, String description, String genre, boolean on_loan){
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.description = description;
        this.genre = genre;
        this.on_loan = on_loan;
    }
    public Book(String title, String author, int year, String description, String genre, boolean on_loan){
        this.title = title;
        this.author = author;
        this.year = year;
        this.description = description;
        this.genre = genre;
        this.on_loan = on_loan;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public boolean isOn_loan() {
        return on_loan;
    }

    public void setOn_loan(boolean on_loan) {
        this.on_loan = on_loan;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", year=" + year +
                ", description='" + description + '\'' +
                ", genre='" + genre + '\'' +
                ", on_loan=" + on_loan +
                '}';
    }
}
