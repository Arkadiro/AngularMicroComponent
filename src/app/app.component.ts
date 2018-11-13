import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-video';
  show:boolean = false;
  url:string;
  whiteX = false;

  constructor(){}
  
  ngOnInit(){
  }

  clicked(){
    console.log('click')
  }

  getColor(){
    if(this.whiteX){
      return 'white'
    }
  }

  showLog(){
    console.log('green Button')
  }
}
