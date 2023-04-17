<template>
    <div class="formWrapper">
        <h2>Log-in</h2>
        <form @submit.prevent="submitForm()">
            <label for="email" class="form-label">Email: </label>
            <input v-model="email" type="email" :class="{ 'form-control': true, 'is-invalid': !emailIsValid }" id="email">

            <label for="password" class="form-label">Password: </label>
            <input v-model="password" type="password" :class="{ 'form-control': true, 'is-invalid': !passwordIsValid }"
                id="password">

            <div class="center">
                <input type="submit" value="Log in" class="btn btn-primary submitButton">
            </div>
            <div class="center">
                <a href="#" @click="switchView()">Register</a>
            </div>

        </form>

    </div>
</template>

<script>
import * as LoginViewModel from '../viewmodels/loginViewModel.js'

export default {
    data() {
        return {
            email: '',
            password: '',
            emailIsValid: true,
            passwordIsValid: true,
        }
    },
    methods: {
        submitForm() {
            if (LoginViewModel.validateEmail(this.email)) {
                this.emailIsValid = true;
                if (LoginViewModel.validatePassword(this.password)) {
                    LoginViewModel.login(this.email, this.password);
                }
                else
                    this.passwordIsValid = false;
            }
            else {
                this.emailIsValid = false;
            }
        },
        switchView() {
            this.$emit('switch-view', false);
        },

    }
}
</script>

<style scoped>
@import '../assets/forms.css';
</style>