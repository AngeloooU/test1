import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paginaalumno1PageRoutingModule } from './paginaalumno1-routing.module';

import { Paginaalumno1Page } from './paginaalumno1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paginaalumno1PageRoutingModule
  ],
  declarations: [Paginaalumno1Page]
})
export class Paginaalumno1PageModule {}
