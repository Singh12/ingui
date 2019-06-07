import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login(f: NgForm) {
    console.log(f);
    if(!f.valid) {
      alert("email id is required");
      return;
    }

    const loginData = {userName: f.value.email, password: f.value.password};
    this.authService.loginUser(loginData);
    
  }

}
