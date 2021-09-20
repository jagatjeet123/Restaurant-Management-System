import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-all-chefs',
  templateUrl: './all-chefs.component.html',
  styleUrls: ['./all-chefs.component.css']
})
export class AllChefsComponent implements OnInit {

  chefs:any=[];
  colors:any;


  constructor(private itemservice:ItemsService) { }

  ngOnInit(): void {
    this.itemservice.getAllChefs();
    this.itemservice.getChefsObservable().subscribe(
      data=>{
        console.log("in all chefs data");
        console.log(data);
        this.chefs=data;
      }
    )
    this.getRandomColor();
  }
  
  
  getRandomColor() {
         let letters = '0123456789ABCDEF';
         var color="#";
          color += letters[Math.floor(Math.random() * 16)];
          this.colors="green";
          setInterval(()=>{
            this.colors= color;
          },1);

      }

      onRowEditInit(rowData:any){
        console.log(rowData);
      }

      onRowEditSave(rowData:any){
        console.log(rowData);
      }

      onRowEditCancel(rowData:any, i:any){
        console.log(rowData);
      }

}
