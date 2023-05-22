import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MainBoxComponent } from './home/main-box/main-box.component';
import { MetodologiaComponent } from './home/metodologia/metodologia.component';
import { PlantelDocenteComponent } from './home/plantel-docente/plantel-docente.component';
import { BusComponent } from './home/bus/bus.component';
import { FooterComponent } from './footer/footer.component';
import { ClasesComponent } from './home/clases/clases.component';
import { CuboComponent } from './home/cubo/cubo.component';
import { HorariosComponent } from './home/horarios/horarios.component';
import { ApoyoComponent } from './home/apoyo/apoyo.component';
import { ContactoComponent } from './home/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainBoxComponent,
    MetodologiaComponent,
    PlantelDocenteComponent,
    BusComponent,
    FooterComponent,
    ClasesComponent,
    CuboComponent,
    HorariosComponent,
    ApoyoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
