import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoComponent } from './contacto/pages/contacto.component';

/* Rutas principales de mi aplicación */
const routes: Routes = [
    {
      // Auth: Login y Registro
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
      // Contacto
      path: 'contacto',
      component: ContactoComponent
    },
    {
      // App - Rutas protegidas
      path: 'app',
      loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
    },
    {
      path: '**',
      redirectTo: 'auth'
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }