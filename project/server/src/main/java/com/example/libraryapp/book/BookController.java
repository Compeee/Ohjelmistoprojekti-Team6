package com.example.libraryapp.book;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/book")
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PreAuthorize("permitAll()")
    @GetMapping
    public List<Book> getBooks() {
        return bookService.getBooks();
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public void addBook(@RequestBody Book book) {
        bookService.addNewBook(book);
    }

    @PreAuthorize("permitAll()")
    @GetMapping("/{bookId}")
    public Optional<Book> getBookById(@PathVariable Long bookId){
        return bookService.findBookById(bookId);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping(path = "{bookId}")
    public void deleteBook(@PathVariable("bookId") Long bookId) {
        bookService.deleteBook(bookId);
    }
    @PreAuthorize("permitAll()")
    @GetMapping(path="/byGenre/{genre}")
    public List<Book> getByGenre(@PathVariable("genre") String genre){
        return bookService.getBooksByGenre(genre);
    }
}
