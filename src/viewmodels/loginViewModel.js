import * as loginModel from '../models/loginModel.js';
import { checkEmail, checkPassword } from '../assets/functions.js';

export function login(email, password){
    loginModel.login(email, password);
    //console.log("login triggered: " + email);
}

export function validateEmail(email){
    return checkEmail(email);
}

export function validatePassword(password){
    return checkPassword(password);
}