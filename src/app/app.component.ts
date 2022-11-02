import { Component } from '@angular/core';
import { DoctorServiceService } from './doctor-service.service';
import { PatientServiceService } from './patient-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public doctorService:DoctorServiceService, public patientService:PatientServiceService){
    
  }
}
