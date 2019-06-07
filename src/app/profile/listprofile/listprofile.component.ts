import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-listprofile',
  templateUrl: './listprofile.component.html',
  styleUrls: ['./listprofile.component.css']
})
export class ListprofileComponent implements OnInit {
profile: [];
profileId: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log('I am in pending', this.authService.getauthTokenData(), this.authService.getUserId());
    
    this.authService.getauthTokenData();
    this.authService.getauthUserDetails().subscribe(
      id => {
        console.log(id.id);
        this.authService.listOfProfile(id.id);
      }
    );
    const id = this.authService.getUserId();
    this.authService.listOfProfile(id);
    this.authService.getProfileOfUser().subscribe(
      profile => this.profile = profile
    )
  }

}
