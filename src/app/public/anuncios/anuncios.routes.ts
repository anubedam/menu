import { Routes } from '@angular/router';

/* Componentes que se renderizan */
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { NuevoAnuncioComponent } from './pages/nuevo-anuncio/nuevo-anuncio.component';

export const anunciosRoutes: Routes = [
   { 
     path: '',  /* Ruta base: /app/anuncios */
     children: [
        { path: 'nuevo', component: NuevoAnuncioComponent },
        { path: '**', component: AnunciosComponent }
     ]
   }  
];