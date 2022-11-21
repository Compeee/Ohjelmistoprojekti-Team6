package com.example.libraryapp.loan;

import com.example.libraryapp.book.BookRepository;
import com.example.libraryapp.libraryUser.LibraryUserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/loan")
public class LoanController {
    private final LoanService loanService;

    public LoanController(LoanService loanService) {
        this.loanService = loanService;
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
    @GetMapping("/{loan_id}")
    public Optional<Loan> findLoanById(@PathVariable("loan_id") Long loan_id){
        return loanService.getLoanById(loan_id);
    }
    @DeleteMapping("/{loan_id}")
    public void deleteLoanById(@PathVariable Long loan_id){
        loanService.deleteLoan(loan_id);

    }
    @PutMapping(path = "/extend/{loan_id}")
    public void extendLoan(@PathVariable("loan_id") Long loan_id){
        loanService.extendLoan(loan_id);
    }
}
