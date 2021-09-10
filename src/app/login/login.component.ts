import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder}from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login!: FormGroup

  constructor(private formBuilder:FormBuilder,private http: HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.login=this.formBuilder.group({
        email:[''],
        password:['']

    })
  }
  logiin(){

    this.http.get<any>("http://localhost:3000/user").subscribe(res=>{

    
      const user = res.find((a:any)=>{

        return a.email === this.login.value.email && a.password === this.login.value.password
      });
      if(user){

        alert("Login Success");
        this.login.reset();
        this.router.navigate(['newsapi'])
      }

      else{

        alert("user not found")
      }
      },err=>{

        alert("something went wrong...")
      })
  }



}
