import { Component, OnInit } from '@angular/core';
import { Data3Service } from '../data3.service';
import { blog } from '../models/blog.model';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.css']
})
export class BerriesComponent implements OnInit {

  array:blog[]=[];

    //inject
    constructor(private dsobj:Data3Service) {
  
     }
  
     //obj initialization 
    ngOnInit(): void {
      this.array=this.dsobj.getBerriesData();
    }
  

}
