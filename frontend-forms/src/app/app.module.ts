import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InsuranceTypeService } from './insurance-type.service';
import { InsuranceFormComponent } from './insurance-form.component';

@NgModule({
  imports: [
    BrowserModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    InsuranceFormComponent,
  ],
  providers: [
    InsuranceTypeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
