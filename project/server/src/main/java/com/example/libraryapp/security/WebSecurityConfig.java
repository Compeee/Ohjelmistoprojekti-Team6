package com.example.libraryapp.security;

import com.example.libraryapp.libraryUser.LibraryUserRole;
import com.example.libraryapp.libraryUser.LibraryUserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
@AllArgsConstructor
@EnableWebSecurity
@EnableMethodSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {


    private final LibraryUserService libraryUserService;

    private final PasswordEncoder passwordEncoder;
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/v*/register/**").permitAll()
                .antMatchers(HttpMethod.GET, "/api/v*/book").permitAll()
                .antMatchers(HttpMethod.DELETE,"/api/v*/book").hasAuthority(LibraryUserRole.ADMIN.name())
                .antMatchers(HttpMethod.POST,"/api/v*/book").hasAuthority(LibraryUserRole.ADMIN.name())
                .antMatchers(HttpMethod.DELETE, "/api/v*/loan").hasAnyAuthority(LibraryUserRole.ADMIN.name(), LibraryUserRole.USER.name())
                .antMatchers(HttpMethod.POST, "/api/v*/loan").hasAnyAuthority(LibraryUserRole.ADMIN.name(), LibraryUserRole.USER.name())
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider =
                new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder);
        provider.setUserDetailsService(libraryUserService);
        return provider;
    }


}