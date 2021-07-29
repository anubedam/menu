import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Módulo de rutas */
import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from '../shared/shared.module';

/* Componentes pertenecientes a AuthModule */
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [
    /* Componentes que pertenecen a Auth Module */
    LoginComponent, 
    RegistroComponent
  ],
  imports: [
    /* Componentes pertenecientes a AuthModule */
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }