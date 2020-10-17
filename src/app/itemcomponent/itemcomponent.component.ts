import { Component, OnInit } from '@angular/core';
import { Fooddetails } from '../food.model';
import { ServiceModelService } from '../service.model.service';

@Component({
  selector: 'app-itemcomponent',
  templateUrl: './itemcomponent.component.html',
  styleUrls: ['./itemcomponent.component.css']
})
export class ItemcomponentComponent implements OnInit {

   itemarray:Fooddetails[];
  
  constructor(private _service:ServiceModelService) { 
    this.itemarray=_service.getFood();
  }
  addcart(item){
    this._service.addfood(item);
  }

  ngOnInit(): void {
  }

}
