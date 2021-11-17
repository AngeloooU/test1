import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidaContraPage } from './olvida-contra.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidaContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidaContraPageRoutingModule {}
