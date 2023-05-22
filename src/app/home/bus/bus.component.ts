import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {

  posicionBus: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  previousScrollPosition = 0;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(){
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > this.previousScrollPosition) {
      // El scroll está bajando
      this.posicionBus+=10;
    } else if (this.posicionBus > 0){
      // El scroll está subiendo
      this.posicionBus-=10;
    }
    this.previousScrollPosition = scrollPosition;
  }
}
