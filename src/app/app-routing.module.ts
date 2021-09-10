import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { LoginComponent } from './login/login.component';
import { NewsapiComponent } from './newsapi/newsapi.component';
import { SignupComponent } from './signup/signup.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [

  {path:'', redirectTo:'login',pathMatch:'full'},

  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'newsapi',component:NewsapiComponent},
  {path:'technews',component:TechnewsComponent},
  {path:'sportsnews',component:SportsComponent},
  {path:'entertainmentnews',component:EntertainmentComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
