import { Component } from '@angular/core';
import { InsuranceTypeService, IInsuranceType } from './insurance-type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  insuranceTypes: IInsuranceType[] = [];

  constructor(private insuranceTypeService: InsuranceTypeService) {
    this.insuranceTypeService.fetchAllTypes()
    .subscribe(types => this.insuranceTypes = types);
  }
}
