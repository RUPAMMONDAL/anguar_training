import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { CognizantComponent } from './cognizant/cognizant.component';


@NgModule({
  declarations: [CognizantComponent],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
