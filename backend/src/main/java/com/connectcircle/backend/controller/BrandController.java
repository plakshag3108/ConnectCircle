
package com.connectcircle.backend.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/brand")
public class BrandController {

    @GetMapping("/dashboard")
    public Map<String, String> brandDashboard(
            Authentication authentication) {

        return Map.of(
                "message", "Welcome to Brand Dashboard!",
                "email", authentication.getName(),
                "role", "BRAND",
                "status", "Access Granted"
        );
    }
}
