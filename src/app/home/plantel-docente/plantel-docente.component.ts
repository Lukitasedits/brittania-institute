import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantel-docente',
  templateUrl: './plantel-docente.component.html',
  styleUrls: ['./plantel-docente.component.scss']
})
export class PlantelDocenteComponent implements OnInit, AfterViewInit  {

  anchoLineaPlantel: number = 0;
  transladoDescripcion:boolean = false;

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
          this.anchoLineaPlantel = 20;
          this.transladoDescripcion = true;
        }
      });
    }, options);

    observer.observe(this.elementRef.nativeElement);
  }

}
