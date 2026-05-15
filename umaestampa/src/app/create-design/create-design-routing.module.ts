import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDesignPage } from './create-design.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDesignPageRoutingModule {}
