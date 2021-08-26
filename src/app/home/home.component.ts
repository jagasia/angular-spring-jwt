import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string='';
  constructor(private us:UserService) { }

  ngOnInit(): void {
  }

  fnClick()
  {
    this.us.getWelcomeMessage().subscribe((data)=>{
      console.log(data);
    });    
  }

  fnClick1()
  {
    var token:string|any=localStorage.getItem('token');
    //decode this token
    console.log("The below is the decode of token:");
    var x={"sub":"","exp":"","iat":""};
    x=jwt_decode.default(token);    
    this.name=x.sub;
    console.log(x.sub);
    this.us.fn1().subscribe((data)=>{
      console.log(data);
    })
  }

  fnClick2()
  {
    this.us.fn2().subscribe((data)=>console.log(data));
  }
}
