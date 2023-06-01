
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const app = initializeApp({
    apiKey: "AIzaSyAlEvldTelMRKu_GF406ikilLQMnasQQbc",
    authDomain: "miniproject-2cdde.firebaseapp.com",
    projectId: "miniproject-2cdde",
    storageBucket: "miniproject-2cdde.appspot.com",
    messagingSenderId: "568513162966",
    appId: "1:568513162966:web:54eda95c3c042a8486a377"
})

export const auth = getAuth(app)
export default app