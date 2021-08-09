import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('document:scroll', ['$event']) onMouseMove(e) { this.parallax(e) }
  constructor() { }
  parallax(e) {
    // console.log(e);
    Array.from(document.querySelectorAll(".layer")).forEach((layer: any) => {
      // mousemove
      // let x = (window.innerWidth - e.pageX * 2) / 2;
      // layer.style.transform = `translateX(${x}px)`;
      let height = e.srcElement.scrollingElement.scrollHeight - e.srcElement.scrollingElement.clientHeight;
      let scrollbar = (e.srcElement.scrollingElement.scrollTop / height) * 100;
      layer.style.transform = `translateX(${(scrollbar < 50) ? (0 - (50 - scrollbar)) : Math.abs(50 - scrollbar)}%)`;
    })
  }
  ngOnInit() {
  }
}
