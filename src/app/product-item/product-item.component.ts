import { Component ,Input,OnInit} from '@angular/core';
import { Product } from '../Models/Product';
import { PanierService } from 'src/Services/panier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit{
  // @Input() id: number;
  // @Input() libelle: string;
  // @Input() price: number;
  // @Input() imagURL: string;
  // constructor(id: number, libelle: string, price: number, imagURL: string) {
  //   this.id = id;
  //   this.libelle = libelle;
  //   this.price = price;
  //   this.imagURL = imagURL;
  // }
  @Input()
  product : Product | undefined;

  ngOnInit(){
    

  }
  constructor(private cartService:PanierService,private toastr:ToastrService) {}

  MessageAddToCart(){
    this.toastr.show('Votre produit a été ajouté avec succès!');
  }
  getImages(){
    return this.product?.images?.at(0);
  }
  addToCart(product:any){
    this.cartService.addtoCart(product);
  }
}
