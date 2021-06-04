import { Injectable } from '@angular/core';
import { blog } from './models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor() { }
  private array:blog[]=[
    {
      imgPath:"https://images.unsplash.com/photo-1590080874810-8180c3eb1016?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=516&q=80",
      title:"American heritage",
      price:1000
    },
    {
      imgPath:"https://images.unsplash.com/photo-1447195047884-0f014b0d9288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      title:"wafers o' loaded",
      price:700
    },
    {
      imgPath:"https://images.unsplash.com/photo-1583101778680-85516609fef2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=499&q=80",
      title:"Coffee in celebs",
      price:1300
    }
];

getIcecreamData():blog[]{
  return this.array;
}

}
