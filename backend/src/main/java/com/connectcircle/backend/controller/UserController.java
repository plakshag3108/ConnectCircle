
package com.connectcircle.backend.controller;

import com.connectcircle.backend.dto.UpdateProfileRequest;
import com.connectcircle.backend.dto.UserProfileResponse;
import com.connectcircle.backend.service.UserService;

import jakarta.validation.Valid;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // GET LOGGED-IN USER PROFILE
    @GetMapping("/me")
    public ResponseEntity<?> getMyProfile(
            Authentication authentication) {

        try {
            UserProfileResponse profile =
                    userService.getProfile(authentication.getName());

            return ResponseEntity.ok(profile);

        } catch (IllegalArgumentException exception) {
            return ResponseEntity.badRequest().body(
                    Map.of("message", exception.getMessage())
            );
        }
    }

    // UPDATE LOGGED-IN USER PROFILE
    @PutMapping("/me")
    public ResponseEntity<?> updateMyProfile(
            @Valid @RequestBody UpdateProfileRequest request,
            Authentication authentication) {

        try {
            UserProfileResponse updatedProfile =
                    userService.updateProfile(
                            authentication.getName(),
                            request
                    );

            return ResponseEntity.ok(
                    Map.of(
                            "message", "Profile updated successfully!",
                            "profile", updatedProfile
                    )
            );

        } catch (IllegalArgumentException exception) {
            return ResponseEntity.badRequest().body(
                    Map.of("message", exception.getMessage())
            );
        }
    }

    // UPLOAD PROFILE IMAGE
    @PostMapping(
            value = "/me/profile-image",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<?> uploadProfileImage(
            @RequestParam("file") MultipartFile file,
            Authentication authentication) {

        try {
            UserProfileResponse updatedProfile =
                    userService.uploadProfileImage(
                            authentication.getName(),
                            file
                    );

            return ResponseEntity.ok(
                    Map.of(
                            "message", "Profile image uploaded successfully!",
                            "profile", updatedProfile
                    )
            );

        } catch (IllegalArgumentException exception) {
            return ResponseEntity.badRequest().body(
                    Map.of("message", exception.getMessage())
            );
        }
    }
}
