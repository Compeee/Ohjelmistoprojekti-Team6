package com.example.libraryapp.loan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
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
        loanRepository.save(loan);
        System.out.println(loan);
    }

    public List<Loan> findLoansByUserId(Long user_id) {
        return loanRepository.findAllByUserId(user_id);
    }
    public void extendLoan(Long loanId) {
        Loan loan = loanRepository.findById(loanId).orElseThrow();
        loan.setEndDate(LocalDate.of(2023, 1, 13));
        loanRepository.save(loan);
        System.out.println(loan);
    }
}
