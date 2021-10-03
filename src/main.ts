import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import uiBootstrap from './ui-bootstrap';
import storeBootstrap from './stores';

const app = createApp(App);

// initial UI library
uiBootstrap(app);
// initial store module
storeBootstrap(app);
// initial router
app.use(router);
// mount to app
app.mount('#app');
