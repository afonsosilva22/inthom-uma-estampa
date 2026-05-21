import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDesignPageRoutingModule } from './edit-design-routing.module';

import { EditDesignPage } from './edit-design.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDesignPageRoutingModule
  ],
  declarations: [EditDesignPage]
})
export class EditDesignPageModule {}
