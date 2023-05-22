import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit, AfterViewInit {

  horariosVisto: boolean = false

  constructor(private elementRef: ElementRef) { }

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
          this.horariosVisto = true;
        }
      });
    }, options);

    observer.observe(this.elementRef.nativeElement);
  }
}
