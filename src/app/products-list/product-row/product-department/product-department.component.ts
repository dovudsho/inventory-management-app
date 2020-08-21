import { Product } from './../../../product.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product-department',
    templateUrl: './product-department.component.html',
    styleUrls: ['./product-department.component.css'],
})
export class ProductDepartmentComponent {
    @Input() product: Product;
}
