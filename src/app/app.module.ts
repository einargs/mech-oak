import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { SplashTitleComponent } from './splash-title/splash-title.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashTitleComponent,
    MainPageComponent,
    NavListComponent,
    ProductsPageComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
