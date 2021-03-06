import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IProduct } from '../iProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private _unSubscribeAll = new Subject();
  pageTitle: string = 'Product Details';
  selectedProduct: IProduct | any;
  products: IProduct[] = [];
  errorMessage: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.pageTitle = this.pageTitle ;
    this.productService
      .getProducts()
      .pipe(takeUntil(this._unSubscribeAll))
      .subscribe({
        next: (products) => {
          this.products = products;
          this.selectedProduct = products.find((p) => p.productId === id);
        },
        error: (err) => (this.errorMessage = err),
      });
  }
  ngOnDestroy(): void {
    this._unSubscribeAll.next();
    this._unSubscribeAll.complete();
  }
  onBack() {
    this.router.navigate(['/products']);
  }
}
