import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import { ItemcomponentComponent } from './itemcomponent/itemcomponent.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path:"order",
    component :OrdercomponentComponent
  },
  {
    path:"",
    component:ItemcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
