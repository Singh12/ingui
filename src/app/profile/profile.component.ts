import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile = [
  {name: "List Of Profile", link: "profilelist" },
  {name: "Pending Request", link: "pendingrequest" },
  {name: "Sents Request", link: "sentrequest" }
]
  constructor() { }

  ngOnInit() {
  }

}
