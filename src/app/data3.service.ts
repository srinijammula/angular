import { Injectable } from '@angular/core';
import { blog } from './models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class Data3Service {

  constructor() { }
  private array:blog[]=[
    {
      imgPath:"https://images.unsplash.com/photo-1525151498231-bc059cfafa2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title:"Blueberry pie",
      price:700
    },
    {
      imgPath:"https://images.unsplash.com/photo-1596464372839-fd7b1eaea27e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title:"Raspberry creme fraiche",
      price:2520
    },
    {
      imgPath:"https://images.unsplash.com/photo-1562166374-1c4b2f7c93c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title:"Berries in picnic",
      price:1450
    }
];

getBerriesData():blog[]{
  return this.array;
}
}
