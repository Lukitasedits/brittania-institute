import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Examen } from '../models/Examen';
import { ScrollsService } from '../services/scrolls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('sep5') sep5Ref : ElementRef;
  backgroundPositionX: number = 0;
  backgroundPositionY: number = 0;
  examenesAdultos: Examen[] = [
    new Examen('PET', 'Preliminary english Test'),
    new Examen('FCE', 'First Certificate'),
    new Examen('CAE', 'Advanced English Certificate'),
    new Examen('IELTS', 'English Language Testing System'),
  ];
  examenesAdolescentes: Examen[] = [
    new Examen('PET', 'Preliminary english Test'),
    new Examen('FCE', 'First Certificate (for schools)'),
    new Examen('CAE', 'Advanced English Certificate'),
  ];
  caracteristicasAdultos: string[] = ['Cursos regulares'];
  caracteristicasAdolescentes: string[] = [
    'Cursos regulares',
    'Edades: a partir de los 10 años',
  ];
  anchoLinea: number = 0;

  desplegarLineasSep5: boolean = false;

  @ViewChild('metodologia') metodologiaRef : ElementRef;
  @ViewChild('adultos') adultosRef : ElementRef;
  @ViewChild('adolescentes') adolescentesRef : ElementRef;
  @ViewChild('horarios') horariosRef : ElementRef;
  @ViewChild('apoyo') apoyoRef : ElementRef;
  @ViewChild('contacto') contactoRef : ElementRef;

  constructor(private elementRef: ElementRef, private scrollsService: ScrollsService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const options = {
      root: null, // el elemento raíz de observación (null = viewport)
      rootMargin: '0px', // margen adicional al calcular la intersección
      threshold: 0.5 // el umbral de intersección requerido para la notificación
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.desplegarLineasSep5 = true;
        }
      });
    }, options);

    observer.observe(this.sep5Ref.nativeElement);

    this.subirReferencias();
  }

  subirReferencias(){
    this.scrollsService.addReference(this.metodologiaRef);
    this.scrollsService.addReference(this.adultosRef);
    this.scrollsService.addReference(this.adolescentesRef);
    this.scrollsService.addReference(this.horariosRef);
    this.scrollsService.addReference(this.apoyoRef);
    this.scrollsService.addReference(this.contactoRef);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    function generarNumeroAleatorio(
      min: number,
      max: number,
      condicion: (num: number) => boolean
    ): number {
      let numeroAleatorio: number;

      do {
        numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (!condicion(numeroAleatorio));

      return numeroAleatorio;
    }
    this.backgroundPositionX = generarNumeroAleatorio(
      1,
      1000,
      (num: number) => num % 5 === 0
    );
    this.backgroundPositionY = generarNumeroAleatorio(
      1,
      1000,
      (num: number) => num % 5 === 0
    );

    this.anchoLinea = window.scrollY - 2000;
  }
}
