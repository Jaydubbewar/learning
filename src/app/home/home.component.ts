import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}


  text: String = "This is project X"
  alerttext : String = "Project started"
  on(){
  alert(this.alerttext)
  }
}
