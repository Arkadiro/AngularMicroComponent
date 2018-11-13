import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() public onClick = new EventEmitter<void>();
  @Input() public text:string;
  @Input() public style
  constructor() { }

  ngOnInit() {
  }
  Click(){
    //console.log(this.text)
    this.onClick.emit();
  }


}
