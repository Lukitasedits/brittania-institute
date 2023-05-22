import { ScrollsService } from './../../services/scrolls.service';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-apoyo',
  templateUrl: './apoyo.component.html',
  styleUrls: ['./apoyo.component.scss']
})
export class ApoyoComponent implements OnInit {

  vistaApoyo: boolean = false;

  constructor(private scrollsService: ScrollsService,private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const options = {
      root: null, // el elemento raíz de observación (null = viewport)
      rootMargin: '0px', // margen adicional al calcular la intersección
      threshold: 0.5 // el umbral de intersección requerido para la notificación
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.vistaApoyo = true;
        }
      });
    }, options);

    observer.observe(this.elementRef.nativeElement);
  }

  scrollToConsulta(){
    const element = this.scrollsService.getReference(5).nativeElement as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });


  }
}
