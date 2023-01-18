import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

//import router from './router'
import SouthAmerica from './components/SouthAmerica.vue'
import './assets/main.css'


const routes = [
  { path: '/SouthAmerica', component: SouthAmerica }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [SouthAmerica]
})
const app = createApp(App)

app.use(router)

app.mount('#app')
