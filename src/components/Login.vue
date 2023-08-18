<template>
    <div class="formWrapper">
        <h2>Login</h2>
        <form @submit.prevent="submitForm()">
            <label for="email" class="form-label">Email: </label>
            <input v-model="email" type="email" :class="{ 'form-control': true, 'is-invalid': !emailIsValid }" id="email">

            <label for="password" class="form-label">Password: </label>
            <input v-model="password" type="password" :class="{ 'form-control': true, 'is-invalid': !passwordIsValid }"
                id="password">

            <div class="center" id="alert">
                Invalid e-mail or password.
            </div>

            <div class="center">
                <input type="submit" value="Log in" class="btn btn-primary submitButton">
            </div>
            <div class="center">
                <a href="#" @click="switchView()">Register</a>
            </div>
            <div class="center">
                <a href="#" @click.prevent="navitgateToStudentRegistration">Student</a>
                </div>
            </form>

        </div>
</template>

<script>
import router from "../router";
import * as loginLogic from '../logic/loginLogic.js';

export default {
    data() {
        return {
            email: '',
            password: '',
            emailIsValid: true,
            passwordIsValid: true
        }
    },
    methods: {
        submitForm() {
            if (loginLogic.validateEmail(this.email)) {
                this.emailIsValid = true;
                if (loginLogic.validatePassword(this.password)) {
                    loginLogic.login(this.email, this.password);
                }
                else {
                    this.passwordIsValid = false;
                }
            }
            else {
                this.emailIsValid = false;
            }
        },
        switchView() {
            this.$emit('switch-view', false);
        },
        navitgateToStudentRegistration(){
            router.push({name: 'studentRegistration'});
        }
    }
}
</script>

<style scoped>
@import '../assets/forms.css';
@import 'https://fonts.googleapis.com/css?family=Quicksand';

#alert {
    color: red;
    visibility: hidden;
    font-family: Quicksand;
    padding-top: 5px;
}
</style>