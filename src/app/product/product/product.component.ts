import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  panelOpenState = false;
  productGroup: [];
  constructor(private product: ProductService) {

   }

  ngOnInit() {
    this.product.getProductGroup();
    this.product.getgroupProup().subscribe(
      data => {
        this.productGroup = data;
      }
    )
  }

}
