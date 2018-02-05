import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';

export interface IEnums {
  name: string;
  values: string[];
}

export interface IInsuranceType {
  name: string;
  schema: { [name: string]: string };
  enums: IEnums[];
}

@Injectable()
export class InsuranceTypeService {
  constructor(private httpClient: HttpClient) {}

  fetchAllTypes(): Observable<IInsuranceType[]> {
    return this.httpClient.get(environment.endpoint + '/types/get-all')
    .map(res => <IInsuranceType[]> res);
  }
}
