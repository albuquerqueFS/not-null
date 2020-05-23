import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeComponentComponent } from './me-component/me-component.component';

const routes: Routes = [
  { path: '', component: MeComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
