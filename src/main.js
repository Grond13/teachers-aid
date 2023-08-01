import { createApp } from 'vue'
import Initial from './components/Initial.vue' 
import Main from './components/Main.vue' 
import App from './App.vue'
import router from './router'
import store from './store' //added
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store) // added

app.component('Initial', Initial)
app.component('Main', Main)

app.mount('#app')