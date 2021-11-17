import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paginadocente1PageRoutingModule } from './paginadocente1-routing.module';

import { Paginadocente1Page } from './paginadocente1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paginadocente1PageRoutingModule
  ],
  declarations: [Paginadocente1Page]
})
export class Paginadocente1PageModule {}
