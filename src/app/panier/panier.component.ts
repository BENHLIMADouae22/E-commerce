import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PanierService } from 'src/Services/panier.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  
  public products : any=[];
  public grandTotal : number=0;
  Quantity:any;
  value:number=1;

  constructor(private cartService:PanierService,private toastr:ToastrService){}
  ngOnInit(): void {
    this.products=this.cartService.getProducts();
    this.Quantity = Array(this.products.length).fill(this.value);    
  } 
  MessageCommande(){
    this.toastr.show('Vous avez effectué une commande avec un total à payer de '+this.sumColumn('idTable',5));
  }
  // getTotal(){
  //   let Total = 0;
  //   let i=0;
  //   this.products.forEach((item: { price: any; })=>{
  //     Total+=item.price+this.Quantity[i];
  //     i++;
  //   })
  //   return Total;
  // }
  sumColumn(tableId:string, columnIndex:number) : number {
    let table = <HTMLTableElement>document.querySelector(`table#${tableId}`);
    let total = 0;
    for (let i = 1; i < table.rows.length; i++) {
      total += parseFloat(table.rows[i].cells[columnIndex].innerHTML);
    }
    return total;
  }
  
  removeCartItem(item:any){
    this.cartService.removeCartItem(item);
  }
  removeAllCartItems(){
     this.cartService.removeAllCart();
  }
  increment(i:number) {
    this.Quantity[i] += 1;
  }

  decrement(i:number) {
    this.Quantity[i] -= 1;
  }
}