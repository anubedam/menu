import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componentes pertenecientes al módulo shared */
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';

/* Para que realice las navegaciones */
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    /* Componentes pertenecientes al módulo Shared */
    CabeceraComponent,
    PieComponent
  ],
  imports: [
    /* Módulo que necesitan nuestros componentes */
    CommonModule,
    RouterModule
  ],
  exports: [
    /* Componentes que se utilizarán fuera de este módulo */
    CabeceraComponent,
    PieComponent
  ]
})
export class SharedModule { }