import { Routes } from '@angular/router';

/* Componentes que se renderizan */
import { FiestasComponent } from './pages/fiestas/fiestas.component';
import { NuevaFiestaComponent } from './pages/nueva-fiesta/nueva-fiesta.component';

export const fiestasRoutes: Routes = [
  {
    path: '', /* Ruta base: /app/fiestas */
    children: [
      { path: '', pathMatch: 'full', component: FiestasComponent },
      { path: 'nueva', component: NuevaFiestaComponent },
      { path: '**', redirectTo: '/' } 
    ]
  }
];