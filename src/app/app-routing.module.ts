import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'pagina-uno',
    loadChildren: () => import('./pages/pagina-uno/pagina-uno.module').then( m => m.PaginaUnoPageModule)
  },
  {
    path: 'pagina-dos',
    loadChildren: () => import('./pages/pagina-dos/pagina-dos.module').then( m => m.PaginaDosPageModule)
  },
  {
    path: 'paginadocente1',
    loadChildren: () => import('./pages/paginadocente1/paginadocente1.module').then( m => m.Paginadocente1PageModule)
  },
  {
    path: 'paginaalumno1',
    loadChildren: () => import('./pages/paginaalumno1/paginaalumno1.module').then( m => m.Paginaalumno1PageModule)
  },  {
    path: 'olvida-contra',
    loadChildren: () => import('./pages/olvida-contra/olvida-contra.module').then( m => m.OlvidaContraPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
