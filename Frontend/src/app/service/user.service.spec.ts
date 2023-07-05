import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { of } from 'rxjs';

describe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;
  let httpClientSpy: any;
  let service:UserService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  
  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(), 
    };
    service = TestBed.get(UserService); 
    userService = new UserService(httpClientSpy);

  });
  afterEach(() => {
    httpTestingController.verify();
  });

  describe('business',()=>{
    
  it('user service should be created', () => {
    expect(service).toBeTruthy(); 
   });

    it('should get all users by calling getAllUsers() in service', () => {
      const res = 'some message';
      const url = 'http://127.0.0.1:8081/socialnetworkapp/users';
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res)); 
      userService.getAllUsers();
      expect(httpClientSpy.get).toHaveBeenCalledWith(url);
    });
    
    it('should get user by calling getUserById() in service', () => {
      const res = 'some message';
      const url = 'http://127.0.0.1:8081/socialnetworkapp/users/1';
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res)); 
      userService.getUserById(1);
      expect(httpClientSpy.get).toHaveBeenCalledWith(url); 
    });

    it('should create user by calling createUser() in service', () => {
      const data = {
        id: 1,
        name:'user1',
        username:'username1',
        email:'abc@yahoo.com',
        password:'abc12345678',
        profilePicture:'pic',
        bio:'bio',
        location:'hyd',
        dateOfBirth:new Date('1990-01-01'),
        gender:'MALE',
        interests:'inter'
       };
      const res = 'some message';
      const url = 'http://127.0.0.1:8081/socialnetworkapp/users';
      jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res));
      userService.createUser(data);
      expect(httpClientSpy.post).toHaveBeenCalledWith(url,data);
    });
  
    it('should update user by calling updateUser() in service', () => {
      const command1 = 1;
      const data = {
        id: 1,
        name:'user1',
        username:'username1',
        email:'abc@yahoo.com',
        password:'abc12345678',
        profilePicture:'pic',
        bio:'bio',
        location:'hyd',
        dateOfBirth:new Date('1990-01-01'),
        gender:'MALE',
        interests:'inter'
      };
  
      const res = 'some message';
      const url = 'http://127.0.0.1:8081/socialnetworkapp/users/1';
      jest.spyOn(httpClientSpy, 'put').mockReturnValue(of(res));
      userService.updateUser(1,data);
      expect(httpClientSpy.put).toHaveBeenCalledWith(url,data);
    });
  
    it('should delete user by calling deleteUser() in service', () => {
      const command = 1;
      const res = 'some message';
      const API_URL = 'http://127.0.0.1:8081/socialnetworkapp/users/1';
      jest.spyOn(httpClientSpy, 'delete').mockReturnValue(of(res));
      userService.deleteUser(command);
      expect(httpClientSpy.delete).toHaveBeenCalledWith(API_URL);
    });

    it('should search user with username by calling getUserByUsername() in service', () => {
      const command = 1;
      const res = 'some message';
      const API_URL = 'http://127.0.0.1:8081/socialnetworkapp/users';
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
      userService.getUserByUsername('user1');
      expect(httpClientSpy.get).toHaveBeenCalledWith(API_URL+'/username'+'/user1');
    });

    it('should search user with email by calling getUserByEmail() in service', () => { 
      const command = 1;
      const res = 'some message';
      const API_URL = 'http://127.0.0.1:8081/socialnetworkapp/users';
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
      userService. getUserByEmail('user1@gmail.com');
      expect(httpClientSpy.get).toHaveBeenCalledWith(API_URL+'/email'+'/user1@gmail.com');
    });
   
   });  

});


