import { createApp } from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
