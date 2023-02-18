<template>
  <initial-header-view></initial-header-view>

  <div class="wrapper">    
      <login-view></login-view>
      <registration-view></registration-view>    

    <button v-on:click="login()">Test</button>
  </div>
<!-- <RouterView />--></template>


<script>
import { RouterLink, RouterView } from 'vue-router';
import { defineComponent } from 'vue';
import * as loginModel from './models/loginModel.js';
import initialHeaderView from './views/initialHeaderView.vue';
import LoginView from './views/LoginView.vue';
import RegistrationView from './views/RegistrationView.vue';


export default defineComponent({
  name: "Don't know yet.",
  data() {
    return {
      name: 'AJAX test',
      surname: 'testtest',
      email: 'ajax@test2.com',
      password: 'User123',
    }
  },
  methods: {
    async login() {
      await loginModel.login(this.email, this.password);
    }
  },
  components: {
    'initial-header-view': initialHeaderView,
    'login-view': LoginView,
    'registration-view': RegistrationView,
  }
})

</script>


<style scoped></style>
