import { Routes } from '@angular/router';

/* Componentes que se renderizan */
import { NuevaNoticiaComponent } from './pages/nueva-noticia/nueva-noticia.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';

export const noticiasRoutes: Routes = [
    { 
      path: '', /* Ruta base: /app/noticias */
      children: [
        { path: 'nueva', component: NuevaNoticiaComponent },
        { path: '**', component: NoticiasComponent }      
      ]
    }
];