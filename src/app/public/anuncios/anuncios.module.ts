import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componentes pertenecientes al módulo anuncios */
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { NuevoAnuncioComponent } from './pages/nuevo-anuncio/nuevo-anuncio.component';

@NgModule({
  declarations: [
    /* Componentes pertenecientes a este módulo */
    AnunciosComponent,
    NuevoAnuncioComponent
  ],
  imports: [
    /* Módulos que necesitan nuestros componentes */
    CommonModule
  ]
})
export class AnunciosModule { }