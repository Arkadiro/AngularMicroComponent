import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-video';
  show:boolean = false;
  url:string;

  constructor(private sanitizer :DomSanitizer){}
  
  ngOnInit(){
    this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/cl2Mx4B_Eks?modestbranding=1&amp;rel=0&amp;controls=1&amp;showinfo=0&amp;html5=1&amp;autoplay=1&amp;iv_load_policy=3')
  }
}
