import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchComponent } from './search.component';

export { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductListComponent, SearchBarComponent, SearchComponent]
})
export class SearchModule { }
