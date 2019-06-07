import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-listprofile',
  templateUrl: './listprofile.component.html',
  styleUrls: ['./listprofile.component.css']
})
export class ListprofileComponent implements OnInit {
profile: [];
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.listOfProfile(1);
    this.authService.getProfileOfUser().subscribe(
      profile => this.profile = profile
    )
  }

}
