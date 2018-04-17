import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';
import { PatientsListPage } from '../patients-list/patients-list';

@IonicPage()
@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
})
export class AddPatientPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private patientService: PatientService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPatientPage');
  }

  addPatient(patient: Patient){
    this.patientService.addPatient(patient).then(ref => {
      this.navCtrl.setRoot('PatientsListPage', {key: ref.key});
    })
  }

}