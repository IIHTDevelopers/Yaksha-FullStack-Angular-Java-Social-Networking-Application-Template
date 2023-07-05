package com.example.socialapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.socialapp.dto.UserDTO;
import com.example.socialapp.repo.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private final UserRepository userRepository;

	@Autowired
	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public List<UserDTO> getAllUsers() {
		return null;
	}

	@Override
	public UserDTO getUserById(Long id) {
		return null;
	}

	@Override
	public UserDTO createUser(UserDTO userDTO) {
		return null;
	}

	@Override
	public UserDTO updateUser(Long id, UserDTO userDTO) {
		return null;
	}

	@Override
	public boolean deleteUser(Long id) {
		return false;
	}

	@Override
	public UserDTO getUserByUsername(String username) {
		return null;
	}

	@Override
	public UserDTO getUserByEmail(String email) {
		return null;
	}

}
