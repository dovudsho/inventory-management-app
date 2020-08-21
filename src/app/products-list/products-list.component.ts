import { Product } from './../product.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    @Input() productList: Product[];

    private currentProduct: Product;

    clicked(product: Product): void {
        this.currentProduct = product;
    }

    isSelected(product: Product): boolean {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }
}
