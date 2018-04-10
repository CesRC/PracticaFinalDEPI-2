import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';
import { PatientsListPage } from '../patients-list/patients-list';

/**
 * Generated class for the EditPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-patient',
  templateUrl: 'edit-patient.html',
})
export class EditPatientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private patientService: PatientService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPatientPage');
  }

  onEditPatient(value: Patient){
    this.patientService.addPatient(value);
    this.navCtrl.pop();
  }
  onLoadEditPatient(){
    this.navCtrl.push(PatientsListPage);
  }
}
