import { Component, OnInit } from '@angular/core';
import { Data2Service } from 'src/app/data2.service';
import {Cupcake} from 'src/app/models/cupcake.model'

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  cupcakes:Cupcake[]=[];
  editCupcakeIndex;
  editCupcakeObj=new Cupcake('','','')
  editCupcakeStatus:boolean=false;

  searchTerm:string;

  constructor(private dsObj:Data2Service) { }

  ngOnInit(): void {
    this.getlist();
  }
  getlist(){
     this.dsObj.getCupcakeData().subscribe(
       res=>{
        this.cupcakes=res;
       },
       err=>{
       console.log("err in reading products",err)
       }
     )
  }

  editCupcake(cupcakeObj,ind){
    this.editCupcakeObj=cupcakeObj;
    this.editCupcakeIndex=ind;
    this.editCupcakeStatus=true;

    console.log('obj to be edited ',this.editCupcakeObj)
  }

  //save after edit
  saveCupcake(modifiedCupcakeObj){
    this.editCupcakeStatus=false;

    modifiedCupcakeObj.id=this.editCupcakeObj["id"];
    modifiedCupcakeObj.imgPath=this.editCupcakeObj["imgPath"];
   
    this.dsObj.updateCupcake(modifiedCupcakeObj).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log("err in update ",err)
      }
    )
  }

  //delete mobile
  deleteCupcake(cupcakeObj){
    console.log("cupcake to delete",cupcakeObj.id)
    this.dsObj.deleteCupcake(cupcakeObj.id).subscribe(
      res=>{
        this.getlist();
        alert("Cupcake deleted")
      },
      err=>{
        console.log("err in deleting Cupcake",err)
      }
    )
}

t=new Date()
}
