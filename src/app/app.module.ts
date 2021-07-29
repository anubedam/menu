import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Módulo de rutas principales */
import { AppRoutingModule } from './app-routing.module';

/* Componentes que pertenecen al bundle principal de la aplicación */
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/pages/contacto.component';

@NgModule({
  declarations: [
    /* Componentes que pertenecen al bundle principal */
    AppComponent,
    ContactoComponent
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