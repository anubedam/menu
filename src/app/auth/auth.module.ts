import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Módulo de rutas */
import { AuthRoutingModule } from './auth-routing.module';

/* Componentes pertenecientes a AuthModule */
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [LoginComponent, RegistroComponent],
  imports: [
    /* Componentes pertenecientes a AuthModule */
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }