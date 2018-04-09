import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';
import { importType } from '@angular/compiler/src/output/output_ast';
import { EditPatientPage } from '../edit-patient/edit-patient';

/**
 * Generated class for the PatientDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient-display',
  templateUrl: 'patient-display.html',
})
export class PatientDisplayPage {
  pacientes: Patient []=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private PatientService: PatientService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientDisplayPage');
  }

  ionViewWillEnter(){
    this.pacientes= this.PatientService.getPatient();
  }
  
  onModifyPatient(){
    this.navCtrl.push(EditPatientPage);
  }
}
