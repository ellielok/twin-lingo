import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap's interactive components (such as dropdown, modal)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// As a complementary styling component
import './style.css'

createApp(App).use(router).mount('#app')
