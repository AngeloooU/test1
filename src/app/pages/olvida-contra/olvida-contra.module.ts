import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidaContraPageRoutingModule } from './olvida-contra-routing.module';

import { OlvidaContraPage } from './olvida-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidaContraPageRoutingModule
  ],
  declarations: [OlvidaContraPage]
})
export class OlvidaContraPageModule {}
