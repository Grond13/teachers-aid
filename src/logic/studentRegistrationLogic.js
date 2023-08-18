import * as StudentRegistrationConnection from '../connection/studentRegistrationConnection.js';

export function validateName(name){
    return name.length >= 2;    
}

export function registerStudent(seat, name, surname, idLessonTime){
    return StudentRegistrationConnection.registerStudent(seat.idSeat, name, surname, idLessonTime);
}