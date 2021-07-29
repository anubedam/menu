import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Módulo de rutas para public  */
import { PublicRoutingModule } from './public-routing.module';

/* Componentes pertenecientes al módulo public */
import { PublicComponent } from './public.component';

/* Módulo shared - para poder utilizar cabecera y pie */
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    /* Componentes pertenecientes a este módulo */
    PublicComponent
  ],
  imports: [
    /* Módulos que utiliza nuestro módulo public */
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }