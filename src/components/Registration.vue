<template>
    <div class="formWrapper">
        <h2>Registration</h2>
        <form @submit.prevent="submitForm()">
            <label for="name" class="form-label">Name: </label>
            <input v-model="name" type="text" :class="{ 'form-control': true, 'is-invalid': !nameIsValid }" id="name"
                required>
            <div v-if="!nameIsValid" id="emailInvalidError" class="invalid-feedback">
                Please enter a valid name.
            </div>

            <label for="surname" class="form-label">Surname: </label>
            <input v-model="surname" type="text" :class="{ 'form-control': true, 'is-invalid': !surnameIsValid }"
                id="surname" required>
            <div v-if="!surnameIsValid" id="emailInvalidError" class="invalid-feedback">
                Please enter a valid surname.
            </div>

            <label for="email" class="form-label">Email: </label>
            <input v-model="email" type="email" :class="{ 'form-control': true, 'is-invalid': !emailIsValid }" id="email"
                required>
            <div v-if="!emailIsValid" id="emailInvalidError" class="invalid-feedback">
                Please enter a valid email address.
            </div>

            <label for="password" class="form-label">Password: </label>
            <input v-model="password" type="password"
                :class="{ 'form-control': true, 'is-invalid': !passwordIsValid || !passwordsMatch }" id="password" required>

            <label for="password2" class="form-label">Password again: </label>
            <input v-model="password2" type="password"
                :class="{ 'form-control': true, 'is-invalid': !passwordIsValid || !passwordsMatch }" id="password2" required>
            <div v-if="!passwordIsValid" id="passwordInvalidError" class="invalid-feedback">
                Password has to be at least 7 characters long.
            </div>
            <div v-if="passwordsMatch === false" id="noMatchError" class="invalid-feedback">
                Passwords do not match.
            </div>

            <div class="center">
                <input type="submit" value="Register" class="btn btn-primary submitButton">
            </div>
            <div class="center">
                <a href="#" @click="switchView()">Login</a>
            </div>
        </form>
    </div>
</template>

<script>
import * as RegistrationLogic from '../logic/registrationLogic.js'

export default {
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            password: '',
            password2: '',
            nameIsValid: true,
            surnameIsValid: true,
            emailIsValid: true,
            passwordsMatch: true,
            passwordIsValid: true,
        }
    },
    methods: {
        submitForm() { //TODO: Idea: automate checking on change in the input? 
            if (!RegistrationLogic.validateName(this.name)) {
                this.nameIsValid = false;
                return;
            }
            else this.nameIsValid = true;

            if (!RegistrationLogic.validateName(this.surname)) {
                this.surnameIsValid = false;
                return;
            }
            else this.surnameIsValid = true;

            if (!RegistrationLogic.validateEmail(this.email)) {
                this.emailIsValid = false;
                return;
            }
            else this.emailIsValid = true;

            var pwCheck = RegistrationLogic.validatePasswords(this.password, this.password2);
            if (!pwCheck.match) {
                this.passwordsMatch = false;
                console.log("passwords do not match");
                console.log(this.passwordsMatch);
                return;
            }
            else this.passwordsMatch = true;
            if (!pwCheck.isValid) {
                this.passwordIsValid = false;
                console.log("passwords are not valid");
                return;
            }
            else this.passwordIsValid = true;

            RegistrationLogic.register(this.name, this.surname, this.email, this.password);
            this.switchView();
        },
        switchView() {
            this.$emit('switch-view', true);
        }
    }
}
</script>

<style scoped>@import '../assets/forms.css';</style>