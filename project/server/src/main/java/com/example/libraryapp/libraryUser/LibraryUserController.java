package com.example.libraryapp.libraryUser;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/user")
public class LibraryUserController {


    private final LibraryUserService libraryUserService;

    @Autowired
    public LibraryUserController(LibraryUserService libraryUserService){ this.libraryUserService = libraryUserService; }

    @GetMapping
    public List<LibraryUser> getUsers(){
        return libraryUserService.getUsers();
    }

    @GetMapping("/{userId}")
    public Optional<LibraryUser> getUserById(@PathVariable Long userId){
        return libraryUserService.findUserById(userId);
    }

    @PostMapping
    public void addLibraryUser(@RequestBody LibraryUser libraryUser) {
        libraryUserService.addNewUser(libraryUser);
    }

    @DeleteMapping(path = "{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        libraryUserService.deleteUser(userId);
    }
}