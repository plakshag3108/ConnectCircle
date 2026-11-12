
package com.connectcircle.backend.security;

import com.connectcircle.backend.entity.Role;
import com.connectcircle.backend.entity.User;
import com.connectcircle.backend.repository.UserRepository;
import com.connectcircle.backend.service.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserRepository userRepository;

    public JwtAuthenticationFilter(
            JwtService jwtService,
            UserRepository userRepository) {

        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        final String authHeader =
                request.getHeader("Authorization");

        // Check Bearer token
        if (authHeader == null ||
                !authHeader.startsWith("Bearer ")) {

            filterChain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);

        try {

            // Extract email from JWT
            String email = jwtService.extractEmail(token);

            if (email != null &&
                    SecurityContextHolder.getContext()
                            .getAuthentication() == null) {

                // Find user in database
                User user = userRepository.findByEmail(email)
                        .orElse(null);

                if (user != null &&
                        Boolean.TRUE.equals(user.getActive()) &&
                        jwtService.isTokenValid(token, email)) {

                    // Get all assigned roles from user_roles
                    List<SimpleGrantedAuthority> authorities =
                            user.getRoles()
                                    .stream()
                                    .map(Role::getName)
                                    .map(role ->
                                            new SimpleGrantedAuthority(
                                                    "ROLE_" + role
                                            )
                                    )
                                    .collect(Collectors.toList());

                    // Legacy fallback for users without role mappings
                    if (authorities.isEmpty()
                            && user.getRole() != null) {

                        authorities.add(
                                new SimpleGrantedAuthority(
                                        "ROLE_" + user.getRole()
                                )
                        );
                    }

                    // Set authentication
                    UsernamePasswordAuthenticationToken authentication =
                            new UsernamePasswordAuthenticationToken(
                                    email,
                                    null,
                                    authorities
                            );

                    authentication.setDetails(user.getId());

                    SecurityContextHolder.getContext()
                            .setAuthentication(authentication);
                }
            }

        } catch (Exception exception) {

            // Invalid or expired token
            SecurityContextHolder.clearContext();
        }

        filterChain.doFilter(request, response);
    }
}
