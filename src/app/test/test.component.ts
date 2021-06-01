import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { FakedataService } from '../fakedata.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit ,OnDestroy{

  mySubscription:Subscription;

  users:any[]=[];
  
  //inject Fakedata service object
  constructor(protected fsObj:FakedataService,private router:Router) { }

  ngOnInit(): void {
  
   this.mySubscription= this.fsObj.getPosts().subscribe(
      UserData=>{
        //assign posts
        this.users=UserData;
       
      },
      err=>{
        console.log("err in getting posts data",err)
      }

    )
  }

onselect(id){
  this.router.navigateByUrl('test/'+id)
}

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

  n=10;
}