import { Component } from '@angular/core';
import {blog} from './models/blog.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: blog[]=[
    {
      imgPath:"https://images.unsplash.com/photo-1613320433989-35fc3877bb1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      title:"Wine"
    },
    {
      imgPath:"https://images.unsplash.com/photo-1485962232502-f25e5874a8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      title:"Berries"
    },
    {
      imgPath:"https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      title:"Cupcake"
    },
    {
      imgPath:"https://images.unsplash.com/photo-1507750549272-e58742b1df80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      title:"Ice-cream"
    },
    {
      imgPath:"https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      title:"Pizza"
    },
    {
      imgPath:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      title:"Coffee"
    }
  ]

  recieve=[];
  getCount(title){
    this.recieve.push(title)
  }
}