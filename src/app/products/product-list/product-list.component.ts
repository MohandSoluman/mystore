import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../iProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List';
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;
  buttonTitle = 'Show Image';
  private _listFilter = '';
  errorMessage: string = '';
  sub: Subscription | undefined;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFiltered(value);
  }
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  toggleImages() {
    this.showImage = !this.showImage;
    this.buttonTitle = this.showImage == true ? 'Hide Image' : 'Show Image';
  }
  performFiltered(filteredBy: string): IProduct[] {
    filteredBy = filteredBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filteredBy)
    );
  }
  onNotify(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
