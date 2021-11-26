import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iproduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {
pageTitle:string = 'Product List';
imageWidth:number=100;
imageMargin:number=2;
showImage:boolean=false;
buttonTitle='Show Image';
private _listFiltter='';
errorMessage:string = '';
sub: Subscription | undefined;

get listFiltter():string{
  return this._listFiltter;
}
set listFiltter(value:string){
  this._listFiltter=value;
  this.filteredProducts= this.performFiltered(value);
}
filteredProducts:Iproduct[]=[];
products:Iproduct[]=[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.sub= this.productService.getProducts().subscribe({
      next:products => {this.products=products;    
        this.filteredProducts=this.products;
      },
      error:err => this.errorMessage=err
    });

  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  
toggleImages(){
    this.showImage=!this.showImage;
     this.buttonTitle=(this.showImage==true)?'Hide Image':'Show Image';
}
performFiltered(filteredBy:string):Iproduct[]{
  filteredBy=filteredBy.toLocaleLowerCase();
  return this.products.filter((product:Iproduct)=>
  product.productName.toLocaleLowerCase().includes(filteredBy));
}
onNotify(message:string):void{
this.pageTitle='Product List: '+message;
}
}
