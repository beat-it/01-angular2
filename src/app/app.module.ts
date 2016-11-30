import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchModule, SearchComponent } from './search/search.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartModule } from './cart/cart.module';
import { CartService } from './cart/cart.service';
import { BACKEND_CONFIG, BackendConfig} from './backend';

const routes:Routes = [
  { path: "search", component: SearchComponent },
  { path: "", redirectTo: "search", pathMatch: 'full' },
  { path: "**", component: NotFoundComponent }
];

const backendConfig : BackendConfig = {
  baseUrl: "http://localhost:8080/service"
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    SearchModule,
    CartModule
  ],
  providers: [
    CartService,
    {provide: BACKEND_CONFIG, useValue: backendConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
