import { Component } from '@angular/core';
import { FormControl, FormArray, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
 submitted = false;

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    mobile: new FormControl('', Validators.required),
        altMobile: new FormArray([]),
  
    address: new FormGroup({
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      pinCode: new FormControl('', Validators.required)}),
  });
  ////alt mobile number
  get altMobile() {
  return this.registerForm.get('altMobile') as FormArray;
  }

  addAltMobile() {
  this.altMobile.push(
    new FormControl('', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')])
  );
}

removeAltMobile(index: number) {
  this.altMobile.removeAt(index);
}
////indian number 


  register(){
    this.submitted =true;
    
    if(this.registerForm.invalid){
      return;
    }
  }


}
