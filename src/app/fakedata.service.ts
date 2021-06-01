import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  //Inject HttpClient obj
  constructor(private hc:HttpClient) { }

  getPosts():Observable<any[]>{
   return this.hc.get<any[]>('http://localhost:3000/users');
  }

getPostById(id):Observable<any>{
  return this.hc.get<any>('http://localhost:3000/users/'+id)
}
}
