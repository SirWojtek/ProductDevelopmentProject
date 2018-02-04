import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { InsuranceTypeService } from './insurance-type.service';

@NgModule({
  imports: [
    BrowserModule,
    MatTabsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    InsuranceTypeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
