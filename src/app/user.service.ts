import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest } from './auth-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='http://localhost:8080';
  constructor(private http:HttpClient) { }

  authenticate(authRequest:any)
  {
    return this.http.post(this.url+"/authenticate",authRequest);
  }

fn2()
{
  return this.http.get(this.url+"/hi");
}

  fn1()
  {
    var jwt:string|any;
    jwt=localStorage.getItem('token');
    console.log(jwt);
    const httpOptions = {
      headers: new HttpHeaders({
          // 'Content-Type':  'application/json',
           Authorization: 'Bearer ' + jwt,
      })
  };
    return this.http.get(this.url+"/hi",httpOptions);    
  }
  getWelcomeMessage()
  {
    var jwt:string|any;
    jwt=localStorage.getItem('token');
    console.log(jwt);
    const httpOptions = {
      headers: new HttpHeaders({
          // 'Content-Type':  'application/json',
           Authorization: 'Bearer ' + jwt,
      })
  };
    return this.http.get(this.url,httpOptions);
  }
}
