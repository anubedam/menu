import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Módulo de rutas para public  */
import { PublicRoutingModule } from './public-routing.module';

/* Módulo shared - para poder utilizar cabecera y pie */
import { SharedModule } from '../shared/shared.module';

/* Componentes pertenecientes al módulo public */
import { PublicComponent } from './public.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    /* Componentes pertenecientes a este módulo */
    PublicComponent,
    InicioComponent
  ],
  imports: [
    /* Módulos qu0e utiliza nuestro módulo public */
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }