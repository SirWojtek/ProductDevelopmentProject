import { IInsuranceType } from './insurance-type.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: [ './insurance-form.component.scss' ]
})

export class InsuranceFormComponent {
  @Input() insuranceType: IInsuranceType;

  getTypeNames(): string[] {
    return this.insuranceType ?
      Object.keys(this.insuranceType.schema) : [];
  }
}
