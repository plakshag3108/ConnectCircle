
package com.connectcircle.backend.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to ConnectCircle! Backend is running successfully.";
    }

    @GetMapping("/api/health")
    public String health() {
        return "ConnectCircle API is healthy!";
    }

    @GetMapping("/test")
    public String test() {
        return "Controller is working!";
    }

    @GetMapping("/api/protected")
    public Map<String, String> protectedApi(
            Authentication authentication) {

        return Map.of(
                "message", "Welcome! JWT authentication successful.",
                "email", authentication.getName(),
                "status", "Authenticated"
        );
    }
}
