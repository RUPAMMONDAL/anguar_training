import { Injectable } from '@angular/core';
import { Fooddetails } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceModelService {

  foodarray: Fooddetails[] = [
    {
      name: "Pizza",
      price: 300,
      imgsrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

    },
    {
      name: "Biriyani",
      price: 250,
      imgsrc: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"


    },
    {
      name: "Sandwich",
      price: 150,
      imgsrc: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Dessert",
      price: 200,
      imgsrc: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

    }

  ]
  orderarray: Fooddetails[] = [];


  constructor() { }
  getFood() {
    return this.foodarray;
  }
  addfood(additem: Fooddetails) {
    this.orderarray.push(additem);


  }
  getorderarray(){
    return this.orderarray;
  }
  delfood(index){
    this.orderarray.splice(index,1);
  }
}
