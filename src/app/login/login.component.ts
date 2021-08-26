import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from '../token';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  status:string='';
  constructor(private fb:FormBuilder, private us:UserService, private router:Router) {
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    });
   }

  ngOnInit(): void {
  }

  fnAuthenticate()
  {
    console.log(this.loginForm.value);
    this.us.authenticate(this.loginForm.value).subscribe((data)=>{
      console.log(data);
      var token:Token=new Token();
      token=<Token>data;
      console.log(token.jwt);
      localStorage.setItem("token",token.jwt);
      this.router.navigate(["/","home"]);
    },(error)=>{
      console.log(error);
      this.status="Login failed. Try again!";
    });
  }
}
