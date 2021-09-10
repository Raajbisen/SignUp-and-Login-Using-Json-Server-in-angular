import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder}from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public signUp !:FormGroup;
  
  constructor(private formBuilder:FormBuilder,private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signUp= this.formBuilder.group({

      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
  }


  signnUp(){

 this.http.post<any>("  http://localhost:3000/user",this.signUp.value).subscribe(res=>{

 alert("SignUp Successfull");
 this.signUp.reset();
 this.router.navigate(["login"]);

 },err=>{

  alert("something went wrong..")
 })

  }

}
