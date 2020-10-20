import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import { ItemcomponentComponent } from './itemcomponent/itemcomponent.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  
  {
    path:"order",
    component :OrdercomponentComponent
  },
  {
    path:"",
    component:ItemcomponentComponent
  },
  {
    path:"cognizant",
    loadChildren:()=>import('./module2/module2.module').then(mod=>mod.Module2Module)



  },
  {
    path:"**",
    component : ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
