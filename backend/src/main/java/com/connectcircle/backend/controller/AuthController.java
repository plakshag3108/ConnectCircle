
package com.connectcircle.backend.controller;

import com.connectcircle.backend.dto.LoginRequest;
import com.connectcircle.backend.dto.LoginResponse;
import com.connectcircle.backend.dto.RegisterRequest;
import com.connectcircle.backend.entity.User;
import com.connectcircle.backend.service.AuthService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // REGISTER API
    @PostMapping("/register")
    public ResponseEntity<?> register(
            @Valid @RequestBody RegisterRequest request) {

        try {

            User user = authService.registerUser(request);

            List<String> assignedRoles = user.getRoles()
                    .stream()
                    .map(role -> role.getName())
                    .sorted()
                    .collect(Collectors.toList());

            return ResponseEntity.status(HttpStatus.CREATED).body(
                    Map.of(
                            "message", "User registered successfully!",
                            "userId", user.getId(),
                            "fullName", user.getFullName(),
                            "email", user.getEmail(),
                            "phone", user.getPhone(),
                            "role", user.getRole(),
                            "roles", assignedRoles
                    )
            );

        } catch (IllegalArgumentException exception) {

            return ResponseEntity.badRequest().body(
                    Map.of("message", exception.getMessage())
            );
        }
    }

    // LOGIN API
    @PostMapping("/login")
    public ResponseEntity<?> login(
            @Valid @RequestBody LoginRequest request) {

        try {

            AuthService.LoginResult result =
                    authService.loginUser(request);

            User user = result.getUser();

            List<String> assignedRoles = user.getRoles()
                    .stream()
                    .map(role -> role.getName())
                    .sorted()
                    .collect(Collectors.toList());

            LoginResponse response = new LoginResponse(
                    "Login successful!",
                    result.getToken(),
                    user.getId(),
                    user.getFullName(),
                    user.getEmail(),
                    user.getRole()
            );

            response.setRoles(assignedRoles);

            return ResponseEntity.ok(response);

        } catch (IllegalArgumentException exception) {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                    Map.of("message", exception.getMessage())
            );
        }
    }
}
