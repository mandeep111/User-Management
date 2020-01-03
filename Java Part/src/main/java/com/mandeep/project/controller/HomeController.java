package com.mandeep.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mandeep.project.dao.UserDao;
import com.mandeep.project.model.User;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class HomeController {

	@Autowired
	private UserDao udao;
	
//	Creating a new user
	@PostMapping("/saveuser")
	public User CreateUser(@RequestBody User user) {
		return udao.save(user);
	}
	
//	Finding all users
	@GetMapping("/allusers")
	public List<User> FindAll() {
		return udao.findAll();
	}
	
//	Deleting user by user id
	@DeleteMapping("/deleteuser/{user_id}")
	public List<User> DeleteUser(@PathVariable("user_id") int user_id) {
		udao.deleteById(user_id);
		return udao.findAll();
	}
	
//	Updating user by user id
	@PutMapping("/updateuser/{user_id}")
	public User UpdateUser(@PathVariable("user_id") int user_id, @RequestBody User userObject) {
		User user = udao.findById(user_id).orElse(new User());
		user.setUser_name(userObject.getUser_name());
		user.setAddress(userObject.getAddress());
		user.setPhone(userObject.getPhone());
		user.setGender(userObject.getGender());
		user.setJob(userObject.getJob());
		return udao.save(user);
	}
	
//	Finding user by id
	@GetMapping("/find/{user_id}")
	public User FindUserById(@PathVariable("user_id") int user_id) {
		return udao.findById(user_id).orElse(new User());
	}
}
