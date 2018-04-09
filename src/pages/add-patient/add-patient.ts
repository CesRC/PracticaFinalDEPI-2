import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';
import { PatientsListPage } from '../patients-list/patients-list';

/**
 * Generated class for the AddPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
})
export class AddPatientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private patientService: PatientService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPatientPage');
  }

  onAddPatient(value: Patient){
    this.patientService.addPatient(value);
    this.navCtrl.pop();
  }
  onLoadAddPatient(){
    this.navCtrl.push(PatientsListPage);
  }
}
