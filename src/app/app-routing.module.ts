import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoubdComponent } from './notfoubd/notfoubd.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'products', component:ProductListComponent},
  {path: 'products/:id',canActivate:[ProductDetailGuard],
   component:ProductDetailsComponent},
  {path: 'welcome', component:WelcomeComponent},
  {path: '', redirectTo:'welcome',pathMatch:'full'},
  {path: '**', component:NotfoubdComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
