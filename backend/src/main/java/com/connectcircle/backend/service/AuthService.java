
package com.connectcircle.backend.service;

import com.connectcircle.backend.dto.LoginRequest;
import com.connectcircle.backend.dto.RegisterRequest;
import com.connectcircle.backend.entity.Role;
import com.connectcircle.backend.entity.User;
import com.connectcircle.backend.repository.RoleRepository;
import com.connectcircle.backend.repository.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedHashSet;
import java.util.Locale;
import java.util.Set;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            UserRepository userRepository,
            RoleRepository roleRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService) {

        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    // REGISTER USER WITH ONE OR MULTIPLE ROLES
    @Transactional
    public User registerUser(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException(
                    "Email is already registered"
            );
        }

        if (userRepository.existsByPhone(request.getPhone())) {
            throw new IllegalArgumentException(
                    "Phone number is already registered"
            );
        }

        Set<String> selectedRoleNames = new LinkedHashSet<>();

        // Use multiple roles if supplied
        if (request.getRoles() != null &&
                !request.getRoles().isEmpty()) {

            for (String roleName : request.getRoles()) {

                if (roleName == null || roleName.isBlank()) {
                    throw new IllegalArgumentException(
                            "Role cannot be empty"
                    );
                }

                selectedRoleNames.add(
                        roleName.trim().toUpperCase(Locale.ROOT)
                );
            }

        } else {

            // Backward compatibility with single role
            String selectedRole = request.getRole();

            if (selectedRole == null || selectedRole.isBlank()) {
                selectedRole = "USER";
            }

            selectedRoleNames.add(
                    selectedRole.trim().toUpperCase(Locale.ROOT)
            );
        }

        // Public registration cannot assign ADMIN
        Set<String> allowedRoles = Set.of(
                "USER",
                "CREATOR",
                "BRAND"
        );

        for (String roleName : selectedRoleNames) {

            if (!allowedRoles.contains(roleName)) {
                throw new IllegalArgumentException(
                        "Invalid role: " + roleName
                );
            }
        }

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());

        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        // Maintain legacy role column temporarily
        user.setRole(selectedRoleNames.iterator().next());

        user.setActive(true);

        // Assign roles from database
        for (String roleName : selectedRoleNames) {

            Role role = roleRepository.findByName(roleName)
                    .orElseThrow(() ->
                            new IllegalArgumentException(
                                    "Role not found in database: " + roleName
                            )
                    );

            user.addRole(role);
        }

        return userRepository.save(user);
    }

    // LOGIN USER
    @Transactional(readOnly = true)
    public LoginResult loginUser(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new IllegalArgumentException(
                                "Invalid email or password"
                        )
                );

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new IllegalArgumentException(
                    "Invalid email or password"
            );
        }

        if (!Boolean.TRUE.equals(user.getActive())) {
            throw new IllegalArgumentException(
                    "Your account is inactive"
            );
        }

        if (user.getRoles() == null || user.getRoles().isEmpty()) {
            throw new IllegalArgumentException(
                    "No roles assigned to this account"
            );
        }

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResult(user, token);
    }

    // LOGIN RESULT
    public static class LoginResult {

        private final User user;
        private final String token;

        public LoginResult(User user, String token) {
            this.user = user;
            this.token = token;
        }

        public User getUser() {
            return user;
        }

        public String getToken() {
            return token;
        }
    }
}
