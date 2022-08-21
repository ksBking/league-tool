import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './MainApp.vue';
import router from './router/main';

import './assets/base.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
