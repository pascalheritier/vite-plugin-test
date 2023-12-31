import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PluginProvider from 'framework-model'

const app = createApp(App);
app.use(PluginProvider);

app.mount('#app')
