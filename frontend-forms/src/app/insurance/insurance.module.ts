import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';

import { InsuranceTypeService } from './insurance-type.service';
import { InsuranceFormComponent } from './insurance-form.component';
import { InsuranceComponent } from './insurance.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  declarations: [
    InsuranceComponent,
    InsuranceFormComponent,
  ],
  providers: [
    InsuranceTypeService,
  ],
  exports: [
    InsuranceComponent,
  ]
})
export class InsuranceModule { }
