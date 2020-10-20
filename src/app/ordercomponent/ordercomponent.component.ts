import { Fooddetails } from './../food.model';
import { ServiceModelService } from './../service.model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordercomponent',
  templateUrl: './ordercomponent.component.html',
  styleUrls: ['./ordercomponent.component.css']
})
export class OrdercomponentComponent {
   cart:Fooddetails[];
   totalPrice:number=0;
   length:string;
  
  constructor(private _service:ServiceModelService) {
    this.cart=_service.getorderarray();
    this.cart.forEach(element => {
      this.totalPrice+=element.price;
      //console.log(this.cart.length)
    });
    if(this.cart.length>0){
     this.length="notnill"

    }
    else
    this.length="nill";
    

   }
   deleteitem(i){
     this._service.delfood(i);
     this.cart=this._service.getorderarray();

   }
   
   
   
    

}
