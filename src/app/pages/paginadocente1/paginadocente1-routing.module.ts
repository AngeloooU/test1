import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paginadocente1Page } from './paginadocente1.page';

const routes: Routes = [
  {
    path: '',
    component: Paginadocente1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paginadocente1PageRoutingModule {}
