import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button-success',
  templateUrl: './button-success.component.html',
  styleUrls: ['./button-success.component.css']
})
export class ButtonSuccessComponent implements OnInit {
  @Input() style;
  @Input() text; 
  @Output() onClick = new EventEmitter<void>()
  @ViewChild('button') button: ElementRef;
  constructor() { }

  ngOnInit() {
    this.button.nativeElement.textContent = this.text;
  }

  Click(){
    this.onClick.emit();
  }

}
