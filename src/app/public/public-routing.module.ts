import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Subrutas de las rutas hijas */
import { PublicComponent } from './public.component';
import { InicioComponent } from './inicio/inicio.component';
import { anunciosRoutes } from './anuncios/anuncios.routes';
import { fiestasRoutes } from './fiestas/fiestas.routes';
import { noticiasRoutes } from './noticias/noticias.routes';

const routes: Routes = [
  {
    path: '',   /* Ruta base: /app */ 
    component: PublicComponent,
    children: [
      { path: '', pathMatch: 'full', component: InicioComponent },
      { path: 'anuncios', children: anunciosRoutes },
      { path: 'fiestas', children: fiestasRoutes },
      { path: 'noticias', children: noticiasRoutes },
      { path: '**', redirectTo: '/' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }