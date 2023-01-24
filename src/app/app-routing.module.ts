import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DetailComponent } from './detail/detail.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListProductComponent } from './list-product/list-product.component';
import { PanierComponent } from './panier/panier.component';



const appRoutes : Routes=[
  {path:'' ,redirectTo:'/authentification',pathMatch:'full'},
  {path: 'listPro',component:ListProductComponent},
  {path :'detail/:id', component:DetailComponent},
  {path : 'authentification',component:AuthComponent},
  {path : 'panier' ,component:PanierComponent},
  {path :'inscription', component:InscriptionComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
