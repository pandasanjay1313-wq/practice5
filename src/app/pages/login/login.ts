import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register } from '../register/register';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Register],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  submitted = false;
  

  users= [
    {
      username: 'admin',
      password: '12345'
    },
    {
      username: 'sanjay',
      password: '54321'
    }
  ];

  showRegister = false;

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  });

  login(){
    this.submitted = true;

    if (this.loginForm.invalid){
      return;
    }

    let userfound =  false;
    for(const user of this.users){
      if(user.username == this.loginForm.value.username){
        userfound = true;

        if(user.password == this.loginForm.value.password){
          alert('Login Successfully');
        }
        else{
          alert('Invalid Password');
        }
        break;
      }

  }
  if(!userfound){
    this.showRegister = true;
  }
  
}
}
// const username = this.loginForm.value.username;
//     const password = this.loginForm.value.password;

//     const user = this.users.find(
//       user => user.username === username && user.password === password
//     );

//     if(user){
//       alert('Login Successfully')
//     }
//     else{
//       this.showRegister = true;
//     }