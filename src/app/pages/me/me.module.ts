import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { MeComponentComponent } from './me-component/me-component.component';


@NgModule({
  declarations: [MeComponentComponent],
  imports: [
    CommonModule,
    MeRoutingModule
  ]
})
export class MeModule { }
