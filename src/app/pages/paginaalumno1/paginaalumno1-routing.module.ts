import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paginaalumno1Page } from './paginaalumno1.page';

const routes: Routes = [
  {
    path: '',
    component: Paginaalumno1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paginaalumno1PageRoutingModule {}
