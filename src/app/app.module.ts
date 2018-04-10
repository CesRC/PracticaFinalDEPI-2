import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LogInPage } from '../pages/log-in/log-in';
import { PatientsListPage } from '../pages/patients-list/patients-list';
import { PatientDisplayPage } from '../pages/patient-display/patient-display';
import { AddPatientPage } from '../pages/add-patient/add-patient';
import { EditPatientPage } from '../pages/edit-patient/edit-patient';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { RegisterPage} from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserService } from '../services/user.services';
import { PatientService } from '../services/patient.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyCiZTX5fBGsCgrjDtPxmrM6BYPPUZRay74",
    authDomain: "practica-final-depi.firebaseapp.com",
    databaseURL: "https://practica-final-depi.firebaseio.com",
    projectId: "practica-final-depi",
    storageBucket: "practica-final-depi.appspot.com",
    messagingSenderId: "82423047094"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    PatientsListPage,
    PatientDisplayPage,
    AddPatientPage,
    EditPatientPage,
    UserProfilePage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'practica-final-depi'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    PatientsListPage,
    PatientDisplayPage,
    AddPatientPage,
    EditPatientPage,
    UserProfilePage,
    RegisterPage
  ],
  providers: [
    UserService,
    StatusBar,
    SplashScreen,
    PatientService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
