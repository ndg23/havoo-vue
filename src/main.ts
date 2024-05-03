import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import '@oruga-ui/theme-oruga/dist/scss/oruga-full.scss';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'
import PrimeVue from 'primevue/config';
import Oruga from '@oruga-ui/oruga-next';

// import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(PrimeVue);
app.use(Oruga)
app.use(createVuestic())

app.use(createPinia())
app.use(router)

app.mount('#app')
