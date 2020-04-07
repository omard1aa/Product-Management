import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  filterString: string = '';
  showImage: boolean = false;
  imageWidth: number = 75;
  imageMargin: number = 2;

  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      productRate: 3.2,
      imageUrl: 'assets/images/leaf_rake.png'
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      productRate: 4.2,
      imageUrl: 'assets/images/garden_cart.png'
    },
  ];
  filteredProducts: IProduct[];

  get listFilter(): string{
    return this.filterString;
  }

  set listFilter(value: string){
    this.filterString = value;
    this.filteredProducts = this.filterString ? this.performFilter(this.filterString) : this.products;
  }

  constructor() {
    this.filteredProducts = this.products;
  }

  ngOnInit(): void {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(value: string): IProduct[] {
    value = value.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(value) !== -1);
  }
}
