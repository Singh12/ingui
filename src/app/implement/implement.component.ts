import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-implement',
  templateUrl: './implement.component.html',
  styleUrls: ['./implement.component.css']
})
export class ImplementComponent implements OnInit {
userId: string;
  constructor(private route: ActivatedRoute, private testService: TestService) { }

  ngOnInit() {
    this.route.params.subscribe(
      param => {console.log(param.id); this.userId = param.id}
    )
  }

  onSubmit() {
    console.log(this.userId);
    this.testService.getId(this.userId);

    this.testService.userId.subscribe(
      data => console.log(data, 'ccc')
    )
  }

}
