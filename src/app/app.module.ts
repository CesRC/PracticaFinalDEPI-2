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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserService } from '../services/user.services';
import { PatientService } from '../services/patient.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    PatientsListPage,
    PatientDisplayPage,
    AddPatientPage,
    EditPatientPage,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    UserProfilePage
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
