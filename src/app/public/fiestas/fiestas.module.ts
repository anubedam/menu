import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Módulo de rutas de fiestas */
import { FiestasRoutingModule } from './fiestas-routing.module';

/* Componentes que pertenecen a este módulo */
import { FiestasComponent } from './pages/fiestas/fiestas.component';
import { NuevaFiestaComponent } from './pages/nueva-fiesta/nueva-fiesta.component';

@NgModule({
  declarations: [
    /* Componente del módulo fiestas */
    FiestasComponent,
    NuevaFiestaComponent
  ],
  imports: [
    /* Módulos que necesitan los componentes de este módulo */
    CommonModule,
    FiestasRoutingModule
  ]
})
export class FiestasModule { }