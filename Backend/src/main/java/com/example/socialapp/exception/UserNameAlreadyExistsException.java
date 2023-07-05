package com.example.socialapp.exception;

public class UserNameAlreadyExistsException extends RuntimeException {

	public UserNameAlreadyExistsException() {
		super();
	}

	public UserNameAlreadyExistsException(String message) {
		super(message);
	}
}
