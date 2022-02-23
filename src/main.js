import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';

require('@/assets/styles/main.scss');

const app = createApp(App);

app.use(router);
app.mount('#app');
