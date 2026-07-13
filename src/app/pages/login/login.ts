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
  showRegister = false;

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


  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  });

  login(){
    this.submitted = true;

    if (this.loginForm.invalid){
      return;
    }
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const user = this.users.find(
      x => x.username === username && x.password === password
    );

    if(user){
      alert('Login Successfully')
    }
    else{
      this.showRegister = true;
    }

  }

  
}
