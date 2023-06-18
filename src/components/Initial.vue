<template>
    <initial-header-view></initial-header-view>

    <div class="wrapper">
        <login-view v-if="loginActive" v-on:switch-view="onSwitchView"></login-view>
        <registration-view v-else v-on:switch-view="onSwitchView"></registration-view>
    </div>
</template>
  
  
<script>
import { defineComponent } from 'vue';
import initialHeaderView from './initialHeader.vue';
import Login from './Login.vue';
import RegistrationView from './Registration.vue';

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
        'login-view': Login,
        'registration-view': RegistrationView,
    },    
})

</script>
  
<style scoped></style>