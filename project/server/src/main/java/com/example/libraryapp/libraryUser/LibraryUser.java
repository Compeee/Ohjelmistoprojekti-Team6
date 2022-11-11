package com.example.libraryapp.libraryUser;

import com.example.libraryapp.loan.Loan;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table
public class LibraryUser {

    @Id
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "user_sequence")

    private Long id;
    private String username;
    private String email;
    private String password;
    private String role;
    private Instant timestamp;

    @OneToOne(mappedBy = "libraryUser")
    private Loan loan;

    public LibraryUser(){

    }

    public LibraryUser(Long id, String username, String email, String password, String role, Instant timestamp){
        this.id=id;
        this.username=username;
        this.email=email;
        this.password=password;
        this.role=role;
        this.timestamp=timestamp;
    }

    public LibraryUser(String username, String email, String password, String role, Instant timestamp){
        this.username=username;
        this.email=email;
        this.password=password;
        this.role=role;
        this.timestamp=timestamp;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "user{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password=" + password +
                ", role='" + role + '\'' +
                ", timestamp='" + timestamp + '\'' +
                '}';
    }


}