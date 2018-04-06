import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddPatientPage } from '../../pages/add-patient/add-patient';

/**
 * Generated class for the PatientsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patients-list',
  templateUrl: 'patients-list.html',
})
export class PatientsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientsListPage');
  }

  onLoadAddPatient(){
    this.navCtrl.push(AddPatientPage);
  }

}
