export class Product {
  id:number;
  title:string;
  description:string;
  price:number;
  discountPercentage:number;
  rating:number;
  stock:number;
  brand:string;  
  category:string;
  thumbnail:string;
  images : []=[];

  constructor(id:number,title:string,description:string,price:number,discountPercentage:number,rating:number,stock:number,brand:string,category:string,thumbnail:string){
      this.id=id;
      this.title=title;
      this.description=description;
      this.price=price;
      this.discountPercentage=discountPercentage;
      this.rating=rating;
      this.stock=stock;
      this.brand=brand;
      this.category=category;
      this.images=[];
      this.thumbnail=thumbnail;

  }
}
