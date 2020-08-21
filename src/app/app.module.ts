import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './products-list/product-row/product-row.component';
import { ProductImageComponent } from './products-list/product-row/product-image/product-image.component';
import { ProductDepartmentComponent } from './products-list/product-row/product-department/product-department.component';
import { PriceDisplayComponent } from './products-list/product-row/price-display/price-display.component';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		ProductsListComponent,
		ProductRowComponent,
		ProductImageComponent,
		ProductDepartmentComponent,
		PriceDisplayComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
