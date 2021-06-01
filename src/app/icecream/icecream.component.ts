import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';
import { blog } from '../models/blog.model';

@Component({
  selector: 'app-icecream',
  templateUrl: './icecream.component.html',
  styleUrls: ['./icecream.component.css']
})
export class IcecreamComponent implements OnInit {

array:blog[]=[];

  //inject
  constructor(private dsobj:Data1Service) {

   }

   //obj initialization 
  ngOnInit(): void {
    this.array=this.dsobj.getIcecreamData();
  }


}