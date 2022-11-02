import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  patients:{name:string,illness:string}[];

  constructor() {
    this.patients = [
      { "name": "Amadi", "illness": "one"},
      { "name": "Uzochuckwu", "illness": "four"},
      { "name": "Zaccheaus", "illness": "two"},
      { "name": "Nchelem", "illness": "three"},
      { "name": "Bashai", "illness": "four"},
      { "name": "Yolanda", "illness": "one"},
      { "name": "Aminadoki", "illness": "two"},
    ];
   }
   getCount():number{
    return this.patients.length;
   }
}
