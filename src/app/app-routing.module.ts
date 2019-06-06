import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ImplementComponent } from './implement/implement.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductgroupComponent } from './product/productgroup/productgroup.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'product', component: ProductComponent, children: [
    { path: '', redirectTo: "1" , pathMatch: "full"},
    {path:':id', component: ProductgroupComponent},
  ]},
 
  {path:'implement/:id', component: ImplementComponent},
  {path:'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
