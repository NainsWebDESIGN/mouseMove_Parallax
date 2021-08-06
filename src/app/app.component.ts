import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    this.parallax(e)
  }
  constructor() { }
  parallax(e) {
    console.log(e);
    Array.from(document.querySelectorAll(".layer")).forEach((layer: any) => {
      let x = (window.innerWidth - e.pageX * 2) / 2;
      layer.style.transform = `translateX(${x}px)`;
    })
  }
  ngOnInit() {
  }
}
