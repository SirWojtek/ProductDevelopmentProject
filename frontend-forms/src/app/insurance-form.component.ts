import { IInsuranceType } from './insurance-type.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: [ './insurance-form.component.scss' ]
})

export class InsuranceFormComponent {
  @Input() insuranceType: IInsuranceType;

  isInput(field: string): boolean {
    return ['text', 'number', 'date'].includes(
      this.insuranceType.schema[field]);
  }

  getTypeNames(): string[] {
    return this.insuranceType ?
      Object.keys(this.insuranceType.schema) : [];
  }

  getPlaceholder(text: string): string {
    return text.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function(str){ return str.toUpperCase(); });
  }

  getInputType(field: string): string {
    return this.insuranceType.schema[field];
  }

  getOptions(field: string): string[] {
    const enumType = this.insuranceType.schema[field];
    return this.insuranceType.enums
      .find(e => e.name === enumType)
      .values.map(this.getPlaceholder);
  }
}
