import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import "plugintest/styles.css" // in case you have some style defined in the plugin

import PluginProvider from "plugintest"


const app = createApp(App);

app.use(PluginProvider);
app.mount('#app');
