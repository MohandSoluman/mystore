import { NgModule } from '@angular/core';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailsComponent,
    ProductEditComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: 'products/:id/edit', component: ProductEditComponent },
    ]),
    SharedModule,
  ],
  exports: [SharedModule],
})
export class ProductModule {}
