import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Routes, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authTokenCheck = new Subject<boolean>();
  private authTokenDataCheck = false;
  private getProfile = new Subject<any>();
  private userIds;
  userData = new Subject<any>();
  url = "http://10.117.189.73:9090/ZindagiMatrimony/api";
  constructor(private http: HttpClient, private route: Router) { }


  getAuthToken() {
    return this.authTokenCheck.asObservable();
  }

  getProfileOfUser() {
   return this.getProfile.asObservable();
  }

  getauthTokenData() {
    return this.authTokenDataCheck;
  }

  getauthUserDetails() {
    return this.userData.asObservable();
  }

  registerUser(formData) {
    this.http.post(this.url+'/users' , formData)
    .subscribe(
      data => {
        console.log(data);
        alert("User Register Successfully");
        this.route.navigate(['/login']);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      });
  }

  getUserId() {
    return this.userIds;
  }

  loginUser(loginForm) {
    this.http.post<{id: number, userName: string, gender: string, status: string}>(this.url+'/login', loginForm)
    .subscribe(
      loginData => {
        console.log(loginData);
        alert(loginData.status);
        this.authTokenCheck.next(true);
        this.authTokenDataCheck = true;
        this.userIds = loginData.id;
        this.userData.next({id: loginData.id, userName: loginData.userName, gender: loginData.gender, status: loginData.status})
        this.route.navigate(['/profile']);

      },
      error => {
        console.log(error)
      }
    )
  }

  listOfProfile(id) {
    console.log(id);
    this.http.get("http://10.117.189.253:9090/ZindagiMatrimony/api/getAllProfiles/"+id)
    .subscribe(
      profile => {
        console.log(profile);
        this.getProfile.next(profile);
      }
    )
  }

  logout() {
    
    this.authTokenCheck.next(false);
    this.authTokenDataCheck = false;
    this.userIds = null;
    this.route.navigate(['/login']);
  }
}
