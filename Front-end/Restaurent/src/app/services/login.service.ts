import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Login } from '../models/login';
import { KitchenMaster } from '../models/kitchen-master';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  customerLoginURI="http://localhost:8080/customerlogin";
  adminLoginURI="http://localhost:8080/adminlogin";
  supervisorLoginURI="http://localhost:8080/supervisorlogin";
  kitchenMasterLoginURI="http://localhost:8080/kitchenmasterlogin";

  kitchenMasterRegisterURI="http://localhost:8080/addChef";
  getchefsURI="http://localhost:8080/getChefs";

  constructor(private http:HttpClient) { }


  customerLogin(login:Login){
    return this.http.post<any>(this.customerLoginURI,login)
  }

  adminLogin(login:Login){
    return this.http.post<any>(this.adminLoginURI,login)
  }

  supervisorLogin(login:Login){
    return this.http.post<any>(this.supervisorLoginURI,login)
  }

  kitchenMasterLogin(login:Login){
    return this.http.post<any>(this.kitchenMasterLoginURI,login)
  }

  registerChef(kitchenMaster:KitchenMaster){
    return this.http.post<any>(this.kitchenMasterRegisterURI,kitchenMaster,{responseType:'text' as 'json'});
  }

  getChefs(){
    return this.http.get<any>(this.getchefsURI);
  }
    
}
