<template>
    <initial-header></initial-header>

    <div class="wrapper">
        <login v-if="loginActive" v-on:switch-view="onSwitchView"></login>
        <registration v-else v-on:switch-view="onSwitchView"></registration>
    </div>
</template>
  
  
<script>
import { defineComponent } from 'vue';
import initialHeader from './initialHeader.vue';
import Login from './Login.vue';
import Registration from './Registration.vue';

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
            console.log(this.loginActive);
        },        
    },
    components: {
        'initial-header': initialHeader,
        'login': Login,
        'registration': Registration,
    },    
})

</script>
  
<style scoped></style>