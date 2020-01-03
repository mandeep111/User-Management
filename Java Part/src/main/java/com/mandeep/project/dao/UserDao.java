package com.mandeep.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mandeep.project.model.User;

public interface UserDao extends JpaRepository<User, Integer> {

}
