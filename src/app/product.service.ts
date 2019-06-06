import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
private productList = new Subject<any>();
private singleProductPage = new Subject<any>();
  constructor(private http: HttpClient) { }

  getgroupProup() {
    return this.productList.asObservable();
  }

  getSinleProducts() {
    return this.singleProductPage.asObservable();
  }

  getProductGroup() {
    this.http.get("http://13.233.56.179:9090/INGProducts/api/productgroups").subscribe(
      (list) => {
        console.log(list);
        this.productList.next(list);
      }
    )
  }

  getSingleProduct(id: string) {
    this.http.get("http://13.233.56.179:9090/INGProducts/api/products/"+id)
    .subscribe(
      singleProduct => {
        console.log(singleProduct);
        this.singleProductPage.next(singleProduct);
      }, 
      error => {
          console.log(error);
      });
  }
}
