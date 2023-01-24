import { AuthService } from 'src/Services/auth.service';


import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductService } from '../../Services/product.service';
import { ResponseApi } from '../Models/ResponseApi';
import { HttpErrorResponse } from '@angular/common/http';
import { PanierService } from 'src/Services/panier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  
  // products!: Product[];
  public products : Array<Product> = [];
  
  
  
  // refreshPage() {
  //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  //   this.router.navigate(["/"]));
  // }
 
  constructor(private _productsService: ProductService,private _panierService: PanierService,private router: Router,public auth:AuthService) {}
  categoriesList: Array<string> = [];
  logged(){
    return this.auth.isLogged()
  }
  ngOnInit(): void {
    
    this._productsService.getAll().subscribe(
      (response:any)=>{
        this.products=response.products;
       // console.log(this.products);
      }
    );
    this._productsService.getAllCategory().subscribe(
      categories => {
        this.categoriesList = categories;
      })
    
  }
  
  totalItem=this._panierService.cartItemList.length


  searchText='';
  getCategories(products: any[]) {
    let categories: any[] = [];
    products.forEach(product => {
      let category = product.category;
      if(!categories.includes(category)){
        categories.push(category);
      }
    });
    return categories;
  }
  /*barre de recherche*/
  public getProductsBySearch(s: string): void {
    this._productsService.getBySearch(s).subscribe(
      (response: ResponseApi) => {
        this.products = response.products;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getProductByCategory(s: string): void {
    if(s==='All'){
      this._productsService.getAll().subscribe(
        (response:any)=>{
          this.products=response.products;
         // console.log(this.products);
        }
      );
    }

    else{
    this._productsService.getByCategory(s).subscribe(
      (response: ResponseApi) => {
        this.products = response.products;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  }
  
  
 
  }


function isLogged() {
  throw new Error('Function not implemented.');
}

