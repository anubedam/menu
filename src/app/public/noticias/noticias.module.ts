import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Módulo de rutas de noticias */
import { NoticiasRoutingModule } from './noticias-routing.module';

/* Componentes del módulo de noticias */
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NuevaNoticiaComponent } from './pages/nueva-noticia/nueva-noticia.component';

@NgModule({
  declarations: [
    /* Componentes que pertenecen a este módulo */
    NoticiasComponent, 
    NuevaNoticiaComponent
  ],
  imports: [
    /* Módulos que necesitan nuestros componentes */
    CommonModule,
    NoticiasRoutingModule
  ]
})
export class NoticiasModule { }