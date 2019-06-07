import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ImplementComponent } from './implement/implement.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ListprofileComponent } from './profile/listprofile/listprofile.component';
import { PendingrequestComponent } from './profile/pendingrequest/pendingrequest.component';
import { SentrequestComponent } from './profile/sentrequest/sentrequest.component';
import { AuthGuard } from './auth/auth.gard';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: "profilelist" , pathMatch: "full"},
    {path:'profilelist', component: ListprofileComponent},
    {path:'pendingrequest', component: PendingrequestComponent},
    {path:'sentrequest', component: SentrequestComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
