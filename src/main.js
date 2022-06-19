import { createApp } from "vue";
import App from "./App.vue";

/* Font Awesome Icon */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas);
library.add(fab);
library.add(far);

require("@/assets/styles/main.scss");

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
