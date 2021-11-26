import { NgModule } from '@angular/core';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailsComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
  
  ],
  exports:[
    SharedModule,
  ]
})
export class ProductModule { }
