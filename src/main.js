import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import { createPinia } from 'pinia'; 
import dayjs from 'dayjs';
import Markdown from 'vue3-markdown-it';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(Markdown);
app.config.globalProperties.$dayjs = dayjs;
app.mount('#app');
