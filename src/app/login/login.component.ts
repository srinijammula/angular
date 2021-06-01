import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(ref){

    let userLoginObj=ref.value;
    console.log(ref.value)
   
    //if username & pw are admin , then only navigate to admin component
     if(userLoginObj.username!='admin'){
      alert("Invalid username")
     }
     else if(userLoginObj.password!='admin'){
      alert("Invalid pass try later")
     }
     else{
       //save username in local storage
       localStorage.setItem("username","admin")
       
      this.router.navigateByUrl("/admin");
     }
     
}

}
