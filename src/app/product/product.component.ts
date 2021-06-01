import { Component, Input, OnInit,EventEmitter,Output} from '@angular/core';
import { blog } from '../models/blog.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() data:any;

  @Output() eve=new EventEmitter();

  bookProduct(t:string){
    this.eve.emit(t)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
