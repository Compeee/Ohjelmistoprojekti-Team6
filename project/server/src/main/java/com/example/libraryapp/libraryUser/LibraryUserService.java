package com.example.libraryapp.libraryUser;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibraryUserService {

    private final LibraryUserRepository libraryUserRepository;

    @Autowired
    public LibraryUserService(LibraryUserRepository libraryUserRepository){
        this.libraryUserRepository = libraryUserRepository;
    }

    public List<LibraryUser> getUsers(){
        return libraryUserRepository.findAll();
    }

    public Optional<LibraryUser> findUserById(Long userId) {
        boolean exists = libraryUserRepository.existsById(userId);
        if (!exists) {
            throw new IllegalStateException("User doesn't exist");
        }
        return libraryUserRepository.findById(userId);
    }

    public void addNewUser(LibraryUser libraryUser){
        libraryUserRepository.save(libraryUser);
        libraryUser.setTimestamp(Instant.now());
    }

    public void deleteUser(Long userId) {
        boolean exists = libraryUserRepository.existsById(userId);
        if (!exists) {
            throw new IllegalStateException("User doesn't exist");
        }
        libraryUserRepository.deleteById(userId);
    }

}