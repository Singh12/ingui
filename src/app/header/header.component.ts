import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
profilePage = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuthToken().subscribe(
      profile => this.profilePage = profile
    )
    this.profilePage = this.authService.getauthTokenData();
  }
  logOut() {
    
  }

}
