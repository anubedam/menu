import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Módulo de rutas principales */
import { AppRoutingModule } from './app-routing.module';

/* Componentes que pertenecen al bundle principal de la aplicación */
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/pages/contacto.component';

/* TO-DO: Eliminar después */
import { CabeceraComponent } from './shared/cabecera/cabecera.component';
import { PieComponent } from './shared/pie/pie.component';

@NgModule({
  declarations: [
    /* Componentes que pertenecen al bundle principal */
    AppComponent,
    ContactoComponent,
    /* TO-DO: Eliminar después */
    CabeceraComponent,
    PieComponent
  ],
  imports: [
    /* Módulos que necesita nuestro bundle principal */
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }