
package com.connectcircle.backend.service;

import com.connectcircle.backend.dto.UpdateProfileRequest;
import com.connectcircle.backend.dto.UserProfileResponse;
import com.connectcircle.backend.entity.User;
import com.connectcircle.backend.repository.UserRepository;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final Cloudinary cloudinary;

    public UserService(
            UserRepository userRepository,
            Cloudinary cloudinary) {

        this.userRepository = userRepository;
        this.cloudinary = cloudinary;
    }

    public boolean emailExists(String email) {
        return userRepository.existsByEmail(email);
    }

    public boolean phoneExists(String phone) {
        return userRepository.existsByPhone(phone);
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    // GET USER PROFILE
    @Transactional(readOnly = true)
    public UserProfileResponse getProfile(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new IllegalArgumentException("User not found")
                );

        return convertToResponse(user);
    }

    // UPDATE USER PROFILE
    @Transactional
    public UserProfileResponse updateProfile(
            String email,
            UpdateProfileRequest request) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new IllegalArgumentException("User not found")
                );

        // Validate phone number
        if (request.getPhone() == null ||
                request.getPhone().isBlank()) {

            throw new IllegalArgumentException(
                    "Phone number is required"
            );
        }

        // Check duplicate phone number
        User existingUser = userRepository
                .findByPhone(request.getPhone().trim())
                .orElse(null);

        if (existingUser != null &&
                !existingUser.getId().equals(user.getId())) {

            throw new IllegalArgumentException(
                    "Phone number is already registered"
            );
        }

        // Update profile details
        user.setFullName(request.getFullName().trim());
        user.setPhone(request.getPhone().trim());
        user.setProfileImage(request.getProfileImage());

        User updatedUser = userRepository.save(user);

        return convertToResponse(updatedUser);
    }

    // UPLOAD PROFILE IMAGE TO CLOUDINARY
    @Transactional
    public UserProfileResponse uploadProfileImage(
            String email,
            MultipartFile file) {

        // Validate empty file
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException(
                    "Please select an image to upload"
            );
        }

        // Allow only supported image formats
        Set<String> allowedTypes = Set.of(
                "image/jpeg",
                "image/png",
                "image/webp"
        );

        String contentType = file.getContentType();

        if (contentType == null ||
                !allowedTypes.contains(contentType.toLowerCase())) {

            throw new IllegalArgumentException(
                    "Only JPG, PNG and WEBP images are allowed"
            );
        }

        // Maximum file size: 5 MB
        long maxSize = 5L * 1024 * 1024;

        if (file.getSize() > maxSize) {
            throw new IllegalArgumentException(
                    "Image size must not exceed 5 MB"
            );
        }

        // Find logged-in user
        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new IllegalArgumentException("User not found")
                );

        try {

            // Upload image to Cloudinary
            Map<?, ?> uploadResult = cloudinary.uploader().upload(
                    file.getBytes(),
                    ObjectUtils.asMap(
                            "folder", "connectcircle/profile-images",
                            "resource_type", "image"
                    )
            );

            // Get secure image URL
            Object secureUrl = uploadResult.get("secure_url");

            if (secureUrl == null) {
                throw new IllegalStateException(
                        "Cloudinary did not return an image URL"
                );
            }

            // Save image URL in MySQL
            user.setProfileImage(secureUrl.toString());

            User updatedUser = userRepository.save(user);

            return convertToResponse(updatedUser);

        } catch (IOException exception) {

            throw new IllegalStateException(
                    "Unable to upload image to Cloudinary",
                    exception
            );
        }
    }

    // CONVERT USER ENTITY TO RESPONSE
    private UserProfileResponse convertToResponse(User user) {

        List<String> assignedRoles = user.getRoles()
                .stream()
                .map(role -> role.getName())
                .sorted()
                .collect(Collectors.toList());

        return new UserProfileResponse(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getPhone(),
                user.getProfileImage(),
                user.getRole(),
                assignedRoles,
                user.getCreatedAt()
        );
    }
}
