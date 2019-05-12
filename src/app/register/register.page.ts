import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Backendless from 'backendless';

var APP_ID:string ='53BFD26B-E3AE-111C-FF80-831079B0AA00';
var APP_KEY:string ='78F867F1-5635-61FB-FF66-2220FE5DBC00';
var APP_VER:string = 'v1';
 
Backendless.initApp(APP_ID, APP_KEY);
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers:[UserService]
})
export class RegisterPage implements OnInit {
userdetail: User[];
user : User[]=[];
  push: any;
  constructor(private userservice : UserService, httpclient : HttpClient) {
      
   }

  ngOnInit() {
  }
  
  register(){
    // this.push.userdetail(this.user);
    // console.log(this.user);
    this.userservice.addUser(this.user);

  }
  
  

}
