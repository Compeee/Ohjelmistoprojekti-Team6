package com.example.libraryapp.libraryUser;

import java.util.List;
import java.util.Optional;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class LibraryUserService implements UserDetailsService {

    private final LibraryUserRepository libraryUserRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public String signUpUser(LibraryUser libraryUser){
        boolean exists = libraryUserRepository.findByEmail(libraryUser.getEmail()).isPresent();

        if(exists){
            throw new IllegalStateException("Email already in use");
        }
        String bcryptPass = bCryptPasswordEncoder.encode(libraryUser.getPassword());
        libraryUser.setPassword(bcryptPass);

        libraryUserRepository.save(libraryUser);
        return "it works";
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

    public void deleteUser(Long userId) {
        boolean exists = libraryUserRepository.existsById(userId);
        if (!exists) {
            throw new IllegalStateException("User doesn't exist");
        }
        libraryUserRepository.deleteById(userId);
    }

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return libraryUserRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("user not found by username"));
    }
}