import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6UoN7pbRwWN4EgznS1tB8fudBtSiQKeM",
  authDomain: "themovielib-1571750021566.firebaseapp.com",
  projectId: "themovielib-1571750021566",
  storageBucket: "themovielib-1571750021566.appspot.com",
  messagingSenderId: "512171036040",
  appId: "1:512171036040:web:e7c5164a71a6b497f3be3d",
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)

app.mount("#app")
