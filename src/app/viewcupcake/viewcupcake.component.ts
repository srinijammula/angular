import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data2Service } from '../data2.service';
import { blog } from '../models/blog.model';
import { Cupcake } from '../models/cupcake.model';

@Component({
  selector: 'app-viewcupcake',
  templateUrl: './viewcupcake.component.html',
  styleUrls: ['./viewcupcake.component.css']
})
export class ViewcupcakeComponent implements OnInit {

  //array:Cupcake[]=[];
    //array=new Observable<Cupcake[]>();
    array:any;

    searchTerm:string;

    //inject
    constructor(private dsobj:Data2Service) {
  
     }
  
     //obj initialization 
    /*ngOnInit(): void {
      this.dsobj.getCupcakeData()
      .subscribe(
         data=>{
        this.array=data;
         },
         err=>{
          console.log("err is ",err)
        }
         )
    }*/
    ngOnInit(): void {
      this.dsobj.getMenuData()
      .subscribe(
         data=>{
        this.array=data;
         },
         err=>{
          console.log("err is ",err)
        }
         )
    }

}
