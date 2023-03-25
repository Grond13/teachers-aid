<template>
    <initial-header-view></initial-header-view>

    <div class="wrapper">
        <login-view :router="router" v-if="loginActive" v-on:switch-view="onSwitchView"></login-view>
        <registration-view v-else v-on:switch-view="onSwitchView"></registration-view>
    </div>
</template>
  
  
<script>
import { defineComponent } from 'vue';
import initialHeaderView from './initialHeaderView.vue';
import LoginView from './LoginView.vue';
import RegistrationView from './RegistrationView.vue';

export default defineComponent({
    name: "Initial",
    data() {
        return {
            loginActive: true,
        }
    },
    methods: {
        onSwitchView(value) {
            this.loginActive = value;
        },        
    },
    components: {
        'initial-header-view': initialHeaderView,
        'login-view': LoginView,
        'registration-view': RegistrationView,
    },    
})

</script>
  
<style scoped></style>