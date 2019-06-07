import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AuthComponent } from '../auth.component';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'mobile': new FormControl('', Validators.required),
      'email': new FormControl('',  [Validators.required, Validators.email]),
      'age': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'qualification': new FormControl('', Validators.required),
      'monthlyIncome': new FormControl('', Validators.required),
      'City': new FormControl('', Validators.required),
      'religion': new FormControl('', Validators.required),
      'foodPreference': new FormControl('', Validators.required),
      'smokingPreference': new FormControl('', Validators.required),
      'userName': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.signupForm.value.password);
    const pass = this.signupForm.value.password;
    const confirmPassword = this.signupForm.value.confirmPassword;
     
    if(this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
      alert("Password is not matching");
      return;
    }

    if (!this.signupForm.valid) {
      alert('Please fill all field');
        return;
    }
   
    const dataForm = {
      age: this.signupForm.value.age,
      city: this.signupForm.value.City,
      emailId: this.signupForm.value.email,
      firstName: this.signupForm.value.firstName,
      foodHabit: this.signupForm.value.foodPreference,
      gender: this.signupForm.value.gender,
      lastName: this.signupForm.value.lastName,
      mobile: this.signupForm.value.mobile,
      monthlyIncome: this.signupForm.value.monthlyIncome,
      password: this.signupForm.value.password,
      qualification: this.signupForm.value.qualification,
      religion: this.signupForm.value.religion,
      userName: this.signupForm.value.userName,
      habit: this.signupForm.value.smokingPreference
    }

   
    this.authService.registerUser(dataForm);
    console.log(dataForm);
    console.log(this.signupForm);
  }

}
