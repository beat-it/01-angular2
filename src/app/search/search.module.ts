import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search.component';

export { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductListComponent]
})
export class SearchModule { }
