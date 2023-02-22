<template>
  <initial-header-view></initial-header-view>

  <div class="wrapper">
    <login-view v-if="loginActive" v-on:switch-view="onSwitchView"></login-view>
    <registration-view v-else v-on:switch-view="onSwitchView"></registration-view>
  </div>
  <!-- <RouterView />-->
</template>


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
      loginActive: true,
    }
  },
  methods: {
    onSwitchView(value) {      
      this.loginActive = value;
    }
  },
  components: {
    'initial-header-view': initialHeaderView,
    'login-view': LoginView,
    'registration-view': RegistrationView,
  },
})

</script>

<style scoped></style>
