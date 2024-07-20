import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  API_URL:string="https://localhost:7244/api";

  constructor(private http:HttpClient) { }

  signin(data:any){
    return this.http.post(`${this.API_URL}/Account/login`,data);
  }
  
  signup(data:any){
    return this.http.post(`${this.API_URL}/Account/register`,data);
  }

  getTokenDetails():any{
    let res:any= jwtDecode(localStorage.getItem('token')!);
    return Number(res["Id"]);
  }

  authenticationStatus(){
    return localStorage.getItem('token')!=null;
  }
}
