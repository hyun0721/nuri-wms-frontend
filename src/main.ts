import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* BootStarp (Vue3) */
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

/* The fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { faTruck, faTruckRampBox, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
// import { faLightbulb, faCircleCheck  } from '@fortawesome/free-regular-svg-icons'
// import { faBlogger } from '@fortawesome/free-brands-svg-icons'

library.add(faTruck);
library.add(faTruckRampBox);
library.add(faBoxOpen);

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(BootstrapVue3)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('font-awesome-layers', FontAwesomeLayers)
  .component('font-awesome-layer-text', FontAwesomeLayersText)
  ;
  
router.isReady().then(() => {
  app.mount('#app');
});