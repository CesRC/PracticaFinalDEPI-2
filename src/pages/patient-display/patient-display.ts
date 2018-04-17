import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';
import { importType } from '@angular/compiler/src/output/output_ast';
import { EditPatientPage } from '../edit-patient/edit-patient';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-patient-display',
  templateUrl: 'patient-display.html',
})
export class PatientDisplayPage {
  
  patient: Patient = {
    avatar: null,
    nombre: '',
    apellidos: '',
    dni: '',
    codigoidentificador: '',
    sexo: '',
    edad: '',
    lugarnacimiento: '',
    enfermedades: '',
    alergias: '',
    medicamentos: ''
  };

  EditPush: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private patientService: PatientService) {
    this.EditPush = EditPatientPage;
  }

  ionViewDidLoad() {
   this.patient= this.navParams.get('patient');
  }

  editPatient(){
    this.navCtrl.push(EditPatientPage);
  }
}
