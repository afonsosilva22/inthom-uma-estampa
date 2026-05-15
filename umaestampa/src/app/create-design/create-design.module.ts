import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDesignPageRoutingModule } from './create-design-routing.module';

import { CreateDesignPage } from './create-design.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDesignPageRoutingModule
  ],
  declarations: [CreateDesignPage]
})
export class CreateDesignPageModule {}
