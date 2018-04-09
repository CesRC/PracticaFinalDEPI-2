import {Patient} from "../models/patient.model";
export class PatientService{
    
    private pacientes: Patient []=
    [{"nombre": "Andres", "dni": "12345678A", "codigoidentificador": "66666", "sexo":"H", "edad":"26", "lugarnacimiento":"Madrid",
     "enfermedades":"Tuberculosis", "alergias":"Frutos secos", "medicamentos":"Algidol"}];
    
    constructor(){
    }

    addPatient(paciente: Patient){
        this.pacientes.push(paciente);
    }

    getPatient(){
        return this.pacientes;
    }



}