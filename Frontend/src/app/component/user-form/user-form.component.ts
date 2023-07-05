
import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { User } from '../../model/user';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {
  userForm!: FormGroup;
  users!: User[];
 
  constructor() {
   // write your logic here
  }

  createUser(): void {
    // write your logic here
  }

  updateUser(): void {
    // write your logic here
  }

  getUserById(userId: number): void {
    // write your logic here
  }

  getAllUsers(): void {
    // write your logic here
  }

  deleteUser(userId: number): void {
   // write your logic here
  }

  searchByUsername(): void {
  // write your logic here
  }

  searchByEmail(): void {
   // write your logic here
}
}