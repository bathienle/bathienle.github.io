import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';

/* Font Awesome Icon */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);
library.add(fas);

require('@/assets/styles/main.scss');

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app');
