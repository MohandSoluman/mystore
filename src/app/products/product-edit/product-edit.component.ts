import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IProduct } from '../iProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit, OnDestroy {
  selectedProduct: IProduct | any;
products: IProduct[] = [];
  private _unSubscribeAll = new Subject();
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProducts()
      .pipe(takeUntil(this._unSubscribeAll))
      .subscribe({
        next:(products)=>{this.products=products;
        this.selectedProduct=this.products.find((p)=>p.productId===id);
      }
      });
  }
  ngOnDestroy(): void {
    this._unSubscribeAll.next();
    this._unSubscribeAll.complete();
  }
}
