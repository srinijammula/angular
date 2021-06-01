import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cupcake} from '../models/cupcake.model';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-addnewcupcake',
  templateUrl: './addnewcupcake.component.html',
  styleUrls: ['./addnewcupcake.component.css']
})
export class AddnewcupcakeComponent implements OnInit {

  constructor(private dsObj:Data2Service,private router:Router) { }

  ngOnInit(): void {
  }

  cupcakeModel=new Cupcake('','',' ');

  onSubmitNewCupcake(){
    
      this.dsObj.createNewCupcake(this.cupcakeModel).subscribe(
        res=>{
  
          this.router.navigateByUrl("products/cupcake")

        },
        err=>{
          console.log('err in creating new cupcakes',err)
        }
      )
  }

}
