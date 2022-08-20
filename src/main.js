import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import { createPinia } from 'pinia'; 
import dayjs from 'dayjs';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDq-2dRU8uR_YJQqDCFUxatpnHXb0WTSsY",
    authDomain: "portfolio-website-v2-yep.firebaseapp.com",
    projectId: "portfolio-website-v2-yep",
    storageBucket: "portfolio-website-v2-yep.appspot.com",
    messagingSenderId: "594557971601",
    appId: "1:594557971601:web:bc10f045623088bb922330",
    measurementId: "G-X40VTF7BQQ"
  };

// Initialize Firebase
const app_firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app_firebase);

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.config.globalProperties.$dayjs = dayjs;
app.mount('#app');
