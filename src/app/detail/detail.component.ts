import { Component } from '@angular/core';
import {ProductService} from "../../Services/product.service";
import {ActivatedRoute} from "@angular/router";
import { Product } from '../Models/Product';
import { PanierService } from 'src/Services/panier.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id:number=0;
  product:any

  constructor(private route: ActivatedRoute,
              private productService : ProductService,
              private panierService:PanierService) {
  }

  ngOnInit(){
    const id: number=this.route.snapshot.params['id'];
    this.productService.getProductById(+id).subscribe(data=>this.product=data);
    
    // this.products = this.productService.getAll();

  }

}