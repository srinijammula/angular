import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { FdService } from '../fd.service';


@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component implements OnInit {

  myPosts:any[]=[];
  constructor(private fobj:FdService) { }
  ngOnInit(): void {
    this.fobj.getPosts().subscribe(
      postData=>{
        this.myPosts=postData;
        console.log(this.myPosts)
      },
      err=>{
        console.log("error occurence");
      }
    )
  }


}
