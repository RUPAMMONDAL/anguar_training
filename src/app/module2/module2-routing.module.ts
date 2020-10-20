import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CognizantComponent} from './cognizant/cognizant.component';

const routes: Routes = [
  {
    path:'',
    component:CognizantComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
