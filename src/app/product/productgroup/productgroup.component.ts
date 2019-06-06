import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-productgroup',
  templateUrl: './productgroup.component.html',
  styleUrls: ['./productgroup.component.css']
})
export class ProductgroupComponent implements OnInit {
showProductList = false;
productId: string;
singleProduct: [];
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
      this.route.paramMap.subscribe(
        (paramMap: ParamMap) => {
          if (paramMap.has('id')) {
            console.log('I am having id');
            this.showProductList = true;
            this.productId = paramMap.get('id');
            this.productService.getSingleProduct(this.productId);

            this.productService.getSinleProducts().subscribe(
              product => {
                this.singleProduct = product;
              }, 
              error => {
                console.log(error, 'Rajnish');
              }
            )
          }
          else {
            this.showProductList = false;
            console.log('no id');
          }
        }
      )
  }

}
