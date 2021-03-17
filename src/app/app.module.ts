import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { FilterproductComponent } from './filterproduct/filterproduct.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListproductComponent,
    FilterproductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
