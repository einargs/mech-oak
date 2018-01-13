import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import { ProductsPageComponent } from "./products-page/products-page.component";

const routes: Routes = [
  {path: "", component: MainPageComponent },
  {path: "products", component: ProductsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
