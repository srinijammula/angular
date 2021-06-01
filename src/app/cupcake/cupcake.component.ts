import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';
import { blog } from '../models/blog.model';

@Component({
  selector: 'app-cupcake',
  templateUrl: './cupcake.component.html',
  styleUrls: ['./cupcake.component.css']
})
export class CupcakeComponent implements OnInit {


    //inject
    constructor(private dsobj:Data2Service) {
  
     }
  
     //obj initialization 
    ngOnInit(): void {
      
    }
  
}
