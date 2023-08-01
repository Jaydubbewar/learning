import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnChanges {
  @Input()  wow:any; 

  @Output() toggle = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('in changes',this.wow,changes)
    // this.wow = true
  }

  off(){
    this.wow = false
    console.log('in off',this.wow)
    this.toggle.emit(false)
  }
}
