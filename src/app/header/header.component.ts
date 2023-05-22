import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollsService } from '../services/scrolls.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private scrollsService: ScrollsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  scrollNosotros(){
    const element = this.scrollsService.getReference(0).nativeElement as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollAdultos(){
    const element = this.scrollsService.getReference(1).nativeElement as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollAdolescentes(){
    const element = this.scrollsService.getReference(2).nativeElement as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollHorarios(){
    const element = this.scrollsService.getReference(3).nativeElement as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollApoyo(){
    const element = this.scrollsService.getReference(4).nativeElement as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollContacto(){
    const element = this.scrollsService.getReference(5).nativeElement as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
