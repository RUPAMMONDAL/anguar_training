import { Fooddetails } from './../food.model';
import { ServiceModelService } from './../service.model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordercomponent',
  templateUrl: './ordercomponent.component.html',
  styleUrls: ['./ordercomponent.component.css']
})
export class OrdercomponentComponent implements OnInit {
   cart:Fooddetails[];
  constructor(private _service:ServiceModelService) {
    this.cart=_service.getorderarray();

   }
   deleteitem(i){
     this._service.delfood(i);
     this.cart=this._service.getorderarray();

   }
   


  ngOnInit(): void {

  }

}
