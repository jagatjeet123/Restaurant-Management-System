import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {

  AllItems:any=[]
  constructor(private itemService:ItemsService) { }

  ngOnInit(): void {
    this.itemService.getAllChefs();
    this.itemService.getProducts().subscribe(
      data=>{
        console.log(data)
        this.AllItems=data
      }
    )
}


}
