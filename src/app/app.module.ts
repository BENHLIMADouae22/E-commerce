import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {RouterModule, Routes} from "@angular/router";
import { DetailComponent } from './detail/detail.component';
import { AuthComponent } from './auth/auth.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductService } from '../Services/product.service';
import { PanierComponent } from './panier/panier.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';




@NgModule({
  declarations: [AppComponent, ListProductComponent, ProductItemComponent, AuthComponent,DetailComponent, PanierComponent, InscriptionComponent, NavbarComponent],
  imports: [BrowserModule,AppRoutingModule,HttpClientModule,FormsModule,ToastrModule.forRoot(),AngularFireModule.initializeApp(environment.firebase), provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
