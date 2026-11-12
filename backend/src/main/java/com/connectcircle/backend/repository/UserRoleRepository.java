
package com.connectcircle.backend.repository;

import com.connectcircle.backend.entity.User;
import com.connectcircle.backend.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRoleRepository
        extends JpaRepository<User, Long> {

    List<User> findByRoles_Name(String roleName);
}

