import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observation } from '../../models/observation.model';
import { ObservationService } from '../../services/observation.service';

/**
 * Generated class for the AddObservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-observation',
  templateUrl: 'add-observation.html',
})
export class AddObservationPage {

  observation: Observation = {
    paciente: '',
    observacion: '',
    hora: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private observationService: ObservationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddObservationPage');
  }

  addObservation(observation: Observation){
    this.observationService.addObservation(observation).then(ref => {
      this.navCtrl.setRoot('ObservationPage', {key: ref.key});
    })
  }

}
