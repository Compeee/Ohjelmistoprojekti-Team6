package com.example.libraryapp.libraryUser;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping(path = "api/v1/user")
public class LibraryUserController {


    private final LibraryUserService libraryUserService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping
    public List<LibraryUser> getUsers(){
        return libraryUserService.getUsers();
    }

    @PreAuthorize("#userId == principal.id")
    @GetMapping("/{userId}")
    public Optional<LibraryUser> getUserById(@PathVariable Long userId){
        return libraryUserService.findUserById(userId);
    }

    @PreAuthorize("#userId == principal.id")
    @DeleteMapping(path = "/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        libraryUserService.deleteUser(userId);
    }
}