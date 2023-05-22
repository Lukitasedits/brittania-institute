import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  vistaContacto: boolean = false;

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
          this.vistaContacto = true;
        }
      });
    }, options);

    observer.observe(this.elementRef.nativeElement);
  }
}
