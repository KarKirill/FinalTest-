import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PageOneComponent,

  ],
  providers: [],
  bootstrap: [PageOneComponent],
})
export class PageOneModule {}