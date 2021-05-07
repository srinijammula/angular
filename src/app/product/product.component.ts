import { Component, Input, OnInit } from '@angular/core';
import { blog } from '../models/blog.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() data:blog;
  constructor() { }

  ngOnInit(): void {
  }

}
