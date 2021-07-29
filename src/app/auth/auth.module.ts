import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Módulo de rutas */
import { AuthRoutingModule } from './auth-routing.module';

/* Componentes pertenecientes a AuthModule */
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [
    /* Componetes pertenecientes a Auth */
    LoginComponent, 
    RegistroComponent
  ],
  imports: [
    /* Modulos que necesita AuthModule */
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }