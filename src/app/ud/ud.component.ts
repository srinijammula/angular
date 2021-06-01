import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-ud',
  templateUrl: './ud.component.html',
  styleUrls: ['./ud.component.css']
})
export class UdComponent implements OnInit {

  postObj:any;
  constructor(private ar:ActivatedRoute,private fs:FakedataService) { }

  ngOnInit(): void {

    let id=this.ar.snapshot.params.id;
    this.fs.getPostById(id).subscribe(
      obj=>{
        this.postObj=obj;
      },
      err=>{
        console.log("err in reading",err)
      }
    )

  }

}
