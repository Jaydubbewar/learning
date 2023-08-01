import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}
  bool = false
  text: String = "This is project X"

  on(){
    this.bool =  true
    console.log('in on')    
  }
  togBool(){
    this.bool = false
  }
}
