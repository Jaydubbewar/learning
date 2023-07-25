import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ID:string = '';
  password:string = '';
  realID = 'user'
  realPass = 'password'

  constructor(private router: Router){}

  logHimIn(){
    if((this.ID==this.realID) && (this.password==this.realPass)){
      this.router.navigate(['/home']);

      alert("You have been logged in")
    }else{
      alert("try again...")
    }
    this.ID = ''
    this.password=''
  }
}
