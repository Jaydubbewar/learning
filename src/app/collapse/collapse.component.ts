import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent {
  open = true;
  change(){
    this.open = this.open ? false : true;
  }
}
