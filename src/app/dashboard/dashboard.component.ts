import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min.js';
import { ProductService } from '../product.service.js';

import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productGroup: [];
  constructor(private product: ProductService) { }

  ngOnInit() {
    this.product.getProductGroup();
    this.product.getgroupProup().subscribe(
      data => {
        if(data[0].groupCount > 25) {
          alert('You have already accessed this product 25 times!')
        } 
        if(data[1].groupCount > 25) {
          alert('You have already accessed this product 25 times!')
        } 
        if(data[2].groupCount > 25) {
          alert('You have already accessed this product 25 times!')
        } 

        let chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "Hit Count"
          },
          data: [{
            type: "column",
            dataPoints: [
              { y: data[0].groupCount, label: data[0].groupName },
              { y: data[1].groupCount, label: data[1].groupName },
              { y: data[2].groupCount, label: data[2].groupName },
            ]
          }]
        });
          
        chart.render();
      }
    )
 
  }

}
