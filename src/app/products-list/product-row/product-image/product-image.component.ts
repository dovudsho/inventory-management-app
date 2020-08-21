import { Product } from './../../../product.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product-image',
    templateUrl: './product-image.component.html',
    styleUrls: ['./product-image.component.css'],
})
export class ProductImageComponent {
    @Input() product: Product;
}
