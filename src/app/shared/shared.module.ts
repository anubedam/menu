import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componentes pertenecientes al módulo shared */
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [
    /* Componentes pertenecientes al módulo Shared */
    CabeceraComponent,
    PieComponent
  ],
  imports: [
    /* Módulo que necesitan nuestros componentes */
    CommonModule
  ],
  exports: [
    /* Componentes que se utilizarán fuera de este módulo */
    CabeceraComponent,
    PieComponent
  ]
})
export class SharedModule { }