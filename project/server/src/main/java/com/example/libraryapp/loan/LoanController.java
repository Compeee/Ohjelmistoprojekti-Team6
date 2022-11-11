package com.example.libraryapp.loan;

import com.example.libraryapp.book.BookRepository;
import com.example.libraryapp.libraryUser.LibraryUserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/loan")
public class LoanController {
    private final LoanService loanService;
    private BookRepository bookRepository;
    private LibraryUserRepository libraryUserRepository;

    public LoanController(LoanService loanService, BookRepository bookRepository, LibraryUserRepository libraryUserRepository) {
        this.loanService = loanService;
        this.bookRepository = bookRepository;
        this.libraryUserRepository = libraryUserRepository;
    }

    @GetMapping("/{user_id}")
    public List<Loan> getLoansByUserId(@PathVariable Long user_id){
        return loanService.findLoansByUserId(user_id);
    }
    @GetMapping
    public List<Loan> getLoans(){
        return loanService.getLoans();
    }
    @PostMapping
    public void createNewLoan(@RequestBody Loan loan){
        loanService.createLoan(loan);
    }
    @PutMapping(path = "/extend/{loanId}")
    public void extendLoan(@PathVariable("loanId") Long loanId){
        loanService.extendLoan(loanId);
    }
}
