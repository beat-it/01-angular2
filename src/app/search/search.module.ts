import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchComponent } from './search.component';
import { SearchService } from './search.service';
import { RepeatDirective } from './product-list/repeat.directive';

export { SearchComponent } from './search.component';
export * from './search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductListComponent, SearchBarComponent, SearchComponent,
    ProductComponent, RepeatDirective],
  providers: [SearchService],
})
export class SearchModule { }
