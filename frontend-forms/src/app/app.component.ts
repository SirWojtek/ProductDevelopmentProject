import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { InsuranceTypeService, IInsuranceType } from './insurance-type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  insuranceTypes: IInsuranceType[] = [];

  constructor(
    private insuranceTypeService: InsuranceTypeService,
    private snackBar: MatSnackBar
  ) {
    this.insuranceTypeService.fetchAllTypes()
    .subscribe(types => this.insuranceTypes = types);
  }

  onSubmit() {
    this.snackBar.open('Form submitted sucessfully!', 'OK');
  }
}
