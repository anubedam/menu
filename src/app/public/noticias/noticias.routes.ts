import { Routes } from '@angular/router';

/* Componentes que se van a renderizar */
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NuevaNoticiaComponent } from './pages/nueva-noticia/nueva-noticia.component';

export const noticiasRoutes: Routes = [
  {
    path: '', /* Ruta base /app/noticias */
    children: [
      { path: '', pathMatch: 'full', component: NoticiasComponent },
      { path: 'nueva', component: NuevaNoticiaComponent },
      { path: '**', redirectTo: '/' }    
    ]
  }
];