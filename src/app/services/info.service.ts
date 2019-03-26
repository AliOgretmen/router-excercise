import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATA } from './data';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  data: any;
  kanton: string;

  constructor() {
     this.data = DATA;
  }

  getKantons():Observable<any> {
    const kantons = this.data.map(item => item.name);
    return of(kantons);
  }

  getCities(kanton: string) {
    this.kanton = kanton;
    const cities = this.data
                      .filter(item => item.name == kanton)
                      .map(item => item.cities)[0]
                      .map(a => a.name);
    return of(cities);
  }

  getFlag(city: string) {
    const flag = this.data
    .filter(item => item.name == this.kanton)
    .map(item => item.cities)[0]
    .filter(item => item.name === city)[0].flag;
    return of(flag);
  }
}
