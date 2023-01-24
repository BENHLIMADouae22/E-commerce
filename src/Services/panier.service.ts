import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/Models/Product';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public cartItemList: Product[] = [];
  numOfItems =new BehaviorSubject([]);
  public productList = new BehaviorSubject<any>([]);
  constructor() {}

  getProducts() {
    return this.cartItemList;
  }

  // addtoCart(product: any) {
  //   this.cartItemList.push(product); 
  // }
  addtoCart(product: any) {
    for(let i = 0; i < this.cartItemList.length; i++) {
        if(product.id === this.cartItemList[i].id) {
            console.log("Product already in cart");
            return;
        }
    }
    this.cartItemList.push(product);
    console.log("Product added to cart");
}


  getTotalPrice() :number{
    let Total = 0;
    this.cartItemList.map((a: any) => {
      Total += a.total;
    });
    return Total;
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }
  removeAllCart(){
    this.cartItemList.map((a:any,index:any)=>{
      this.cartItemList.splice(index,this.cartItemList.length);
    })
  }
}
