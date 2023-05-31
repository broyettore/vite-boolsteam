import { createApp } from 'vue'
import "./assets/styles/main.scss"
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import { router } from './router';

createApp(App).use(router).mount('#app')
