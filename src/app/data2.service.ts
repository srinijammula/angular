import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Cupcake } from './models/cupcake.model';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor(private hc:HttpClient) { }

   getMenuData():Observable<any>{
     return this.hc.get<any>("http://localhost:3000/menu")
   }
  
   
   
   
   
   
   
   getCupcakeData():Observable<Cupcake[]>{
        //http get
       return this.hc.get<Cupcake[]>("http://localhost:3000/cupcake")
    }
  
    //to save /create new 
    createNewCupcake(cupcakeObj):Observable<any>{
      console.log(cupcakeObj)
      return this.hc.post("http://localhost:3000/cupcake",cupcakeObj)
    }

    //update 
    updateCupcake(modifiedCupcakeOj):Observable<any>{
      return this.hc.put("http://localhost:3000/cupcake/"+modifiedCupcakeOj.id,modifiedCupcakeOj)
    }

    //delete 
    deleteCupcake(id):Observable<any>{
      console.log("id is ",id)
      return this.hc.delete("http://localhost:3000/cupcake/"+id)
    }

    userLoginStatus():boolean{
      if(localStorage.getItem("username")==null){
        return false;
      }
      else{
        return true;
      }
    }

    logout(){
      localStorage.clear();
    }
}


