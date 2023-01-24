import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../app/Models/Product';
import { ResponseApi } from 'src/app/Models/ResponseApi';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  hostname='localhost';
  port = 8000
  
  products: Array<Product> = [];

  getAll(){
    return this.http.get("https://dummyjson.com/products?limit=100");
  }
  constructor(private http: HttpClient){
  }

  getProductById(id: number){
    return this.http.get<Product>("https://dummyjson.com/products/"+id);
  }

  getBySearch(search : string | null){
    return this.http.get<ResponseApi>("https://dummyjson.com/products/search?q="+search+"&limit=10");
  }

  getByCategory(category: string | null){
    // return this.http.get<ResponseApi>("https://dummyjson.com/products/category?q="+category+"&limit=10");
    return this.http.get<ResponseApi>("https://dummyjson.com/products/category/"+category);
  }
  getAllCategory(){
    return this.http.get<string[]>("https://dummyjson.com/products/categories");
  }
  // getProductById(id: number): Product | undefined {
  //   return this.products.find(product => product.id === id);
  // }
  // getProducts(){
  //   return  this.http.get<Product[]>('http://'+this.hostname+':'+this.port+'/products').pipe(catchError(this.errorHandler));
  // }

  // getProductsByCategory(category: string){
  //   return  this.http.get<Product[]>('http://'+this.hostname+':'+this.port+'/products/'+category).pipe(catchError(this.errorHandler));
  // }

  // getCategories(){
  //   return  this.http.get<any>('http://'+this.hostname+':'+this.port+'/categories').pipe(catchError(this.errorHandler));
  // }

  // getProductsByPage(page:number,size:number ){
  //   return  this.http.get<Product[]>('http://'+this.hostname+':'+this.port+'/products/'+page+'/'+size).pipe(catchError(this.errorHandler));
  // }

  // errorHandler(error: HttpErrorResponse){
  //   return throwError(error.message || 'Server Error')
  // }

  

}
