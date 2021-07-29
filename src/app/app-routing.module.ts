import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Componentes que se renderizarán */
import { ContactoComponent } from './contacto/pages/contacto.component';

/* Módulos con las rutas hijas */
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PublicRoutingModule } from './public/public-routing.module';

/* Rutas principales de la aplicacion */
const routes: Routes = [
  /* /auth -> Login y registro */
  /* /app  -> Rutas protegidas */
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: 'auth'}   
];

@NgModule({
  imports: [
    /* Módulos que necesita mi aplicacion */
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PublicRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }