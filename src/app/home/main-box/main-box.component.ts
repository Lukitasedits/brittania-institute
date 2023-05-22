import { ScrollsService } from './../../services/scrolls.service';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.scss']
})
export class MainBoxComponent implements OnInit, AfterViewInit  {
  @ViewChild('col2') col2Ref!: ElementRef;
  backgroundPosition: number = 0;
  textPosition: number = 0;
  col2!: HTMLElement;

  constructor(private scrollsService: ScrollsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.col2 = this.col2Ref.nativeElement as HTMLElement;
  }

  scrollToMetodologia(){
    const element =  this.scrollsService.getReference(0).nativeElement as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onWindowScroll() {
    this.backgroundPosition = -window.scrollY;

    this.textPosition = -window.scrollY;

  }
}
