
package com.connectcircle.backend.dto;

import java.util.ArrayList;
import java.util.List;

public class LoginResponse {

    private String message;
    private String token;
    private Long userId;
    private String fullName;
    private String email;

    // Backward compatibility
    private String role;

    // All roles assigned to the account
    private List<String> roles = new ArrayList<>();

    public LoginResponse() {
    }

    public LoginResponse(
            String message,
            String token,
            Long userId,
            String fullName,
            String email,
            String role) {

        this.message = message;
        this.token = token;
        this.userId = userId;
        this.fullName = fullName;
        this.email = email;
        this.role = role;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
