import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {

  @Input()
  product!: Product;

  @HostBinding('attr.class') cssClass = 'item';
}
