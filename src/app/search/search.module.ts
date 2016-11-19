import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

export { SearchComponent } from './search.component';
export * from './search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductListComponent, SearchBarComponent, SearchComponent],
  providers: [SearchService],
})
export class SearchModule { }
