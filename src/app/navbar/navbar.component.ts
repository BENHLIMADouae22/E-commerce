import { AuthService } from 'src/Services/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PanierService } from 'src/Services/panier.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() isLogout =new EventEmitter<void>


  public totalItem :number =0;
  // @Input('parentData') public totalItem;
  constructor(private cartService:PanierService,private auth:AuthService) { }

  
  ngOnInit(): void {
    this.totalItem=this.cartService.cartItemList.length;
  }

  logout(){
    this.auth.logout()
    
  }

}
