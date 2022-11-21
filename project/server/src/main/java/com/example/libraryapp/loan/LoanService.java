package com.example.libraryapp.loan;

import com.example.libraryapp.book.Book;
import com.example.libraryapp.book.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class LoanService {
    private final LoanRepository loanRepository;

    @Autowired
    public LoanService(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }
    public List<Loan> getLoans(){
       return loanRepository.findAll();
    }
    public void createLoan(Loan loan){
        loan.getBook().setOn_loan(true);
        loanRepository.save(loan);
        System.out.println(loan);
    }

    public Optional<Loan> getLoanById(Long loan_id){
        return loanRepository.findById(loan_id);
    }
    public List<Loan> findLoansByUserId(Long user_id) {
        return loanRepository.findAllByUserId(user_id);
    }
    public void extendLoan(Long loan_id) {
        Loan loan = loanRepository.findById(loan_id).orElseThrow();
        loan.setEndDate(loan.getEndDate().plusMonths(1));
        loanRepository.save(loan);
        System.out.println(loan);
    }

    public void deleteLoan(Long loan_id) {
        Optional<Loan> loan = loanRepository.findById(loan_id);
        if(loan.isPresent()){
            Loan loan1 = loan.get();
            Book book = loan1.getBook();
            book.setOn_loan(false);
            loan1.setBook(book);
            loanRepository.save(loan1);
        }
        loanRepository.deleteById(loan_id);

    }
}
