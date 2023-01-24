import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';
import { PanierService } from 'src/Services/panier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public auth:AuthService) {}
  ngOnInit(): void {
 
  }
  
  
}
  

