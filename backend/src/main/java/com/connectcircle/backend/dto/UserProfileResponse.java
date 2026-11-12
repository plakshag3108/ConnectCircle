
package com.connectcircle.backend.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class UserProfileResponse {

    private Long id;
    private String fullName;
    private String email;
    private String phone;
    private String profileImage;

    // Legacy single role
    private String role;

    // All assigned roles
    private List<String> roles = new ArrayList<>();

    private LocalDateTime createdAt;

    public UserProfileResponse() {
    }

    public UserProfileResponse(
            Long id,
            String fullName,
            String email,
            String phone,
            String profileImage,
            String role,
            List<String> roles,
            LocalDateTime createdAt) {

        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.profileImage = profileImage;
        this.role = role;
        this.roles = roles;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
