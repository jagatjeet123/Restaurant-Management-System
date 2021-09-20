import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public AllItemList:any=[];
  public ItemList=new BehaviorSubject<any>([]);
  public ChefList=new BehaviorSubject<any>([]);

  constructor(private http:HttpClient,private login:LoginService) { }

  
  getProducts(){
    
    return this.ItemList.asObservable();
  }

  addItem(uploadItemData:any){
            //Make a call to the Spring Boot Application to save the image
           return this.http.post('http://localhost:8080/addItem', uploadItemData, { observe: 'response' ,responseType: 'text' as 'json'})
  }

  getItems(){
    return this.http.get("http://localhost:8080/getItems",);
  }

  getAllItems(){
    this.getItems().subscribe(
       data=>{
         console.log("in subscripbe 1")
         console.log(data)
        this.AllItemList=data
        this.ItemList.next(data)
       }
    )
  }


  getChefsObservable(){
    return this.ChefList.asObservable();
  }

  getAllChefs(){
    this.login.getChefs().subscribe(
      data=>{
        console.log("yes in getallchefs")
        this.ChefList.next(data);
      }
    )
  } 
  

}
