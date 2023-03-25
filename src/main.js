import { createApp } from 'vue'
import Initial from './views/InitialView.vue' 
import Main from './Main.vue' 
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.component('Initial', Initial)
app.component('Main', Main)

app.mount('#app')
