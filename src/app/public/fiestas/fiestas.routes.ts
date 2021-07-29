import { Routes } from '@angular/router';

/* Componentes que se renderizarán */
import { NuevaFiestaComponent } from './pages/nueva-fiesta/nueva-fiesta.component';
import { FiestasComponent } from './pages/fiestas/fiestas.component';

export const fiestasRoutes: Routes = [
  { 
    path: '', /* Path base: /app/fiestas */
    children: [
      { path: 'nueva', component: NuevaFiestaComponent },
      { path: '**', component: FiestasComponent }
    ]
  }
];