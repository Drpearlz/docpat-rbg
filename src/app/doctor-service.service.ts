import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  doctors:{name:string,specialization:string}[];

  constructor() {
    this.doctors = [
      { "name": "Amadi", "specialization": "one"},
      { "name": "Uzochuckwu", "specialization": "four"},
      { "name": "Zaccheaus", "specialization": "two"},
      { "name": "Nchelem", "specialization": "three"},
      { "name": "Bashai", "specialization": "four"},
      { "name": "Yolanda", "specialization": "one"},
      { "name": "Aminadoki", "specialization": "two"},
    ];
   }

   getCount():number{
    return this.doctors.length;
   }
}