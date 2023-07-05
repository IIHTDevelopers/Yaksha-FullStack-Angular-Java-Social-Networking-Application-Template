import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = '';
  constructor(private http: HttpClient) { }

  getAllUsers() { 
    //write your logic here  
    return null;   
  }

  getUserById(id: number) {
     //write your logic here  
    return null;
  }

  getUserByUsername(username: string) {
     //write your logic here  
    return null;
  }

  getUserByEmail(email: string) {
     //write your logic here  
    return null;
  }

  createUser(user: User) {
     //write your logic here  
    return null;
  }

  updateUser(id: number, user: User) {
     //write your logic here  
    return null;
  }

  deleteUser(id: number){
     //write your logic here  
    return null;
  }
}
