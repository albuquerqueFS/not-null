import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationRoutingModule } from './presentation-routing.module';
import { PresentationComponentComponent } from './presentation-component/presentation-component.component';


@NgModule({
  declarations: [PresentationComponentComponent],
  imports: [
    CommonModule,
    PresentationRoutingModule
  ]
})
export class PresentationModule { }
