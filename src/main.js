import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Create Vue app with router
createApp(App).use(router).mount('#app')
