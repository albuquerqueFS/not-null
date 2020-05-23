import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponentComponent } from './presentation-component/presentation-component.component';

const routes: Routes = [
  { path: '', component: PresentationComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
