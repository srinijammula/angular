import { Component } from '@angular/core';
import { Data2Service } from './data2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public ds:Data2Service){}
  
}