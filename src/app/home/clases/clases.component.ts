import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Examen } from '../../models/Examen';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {

  @Input('titulo') titulo: string;
  @Input('examenes') examenes: Examen[];
  @Input('descripcion') descripcion: string;
  @Input('caracteristicas') caracteristicas: string[];
  @Input('cargaHoraria') cargaHoraria: string;
  entradaDescripcion: boolean = false;
  entradaExamenes: boolean = false;

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
          this.entradaDescripcion = true;
          setInterval(() => {
            this.entradaExamenes = true;
          }, 250)
        }
      });
    }, options);

    observer.observe(this.elementRef.nativeElement);
  }

}
