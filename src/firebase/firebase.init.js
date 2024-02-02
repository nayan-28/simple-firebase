// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1s6H0XNFPQ2q0oWxYDgB3Crpro2ZzBB4",
    authDomain: "simple-firebase-951d0.firebaseapp.com",
    projectId: "simple-firebase-951d0",
    storageBucket: "simple-firebase-951d0.appspot.com",
    messagingSenderId: "750127990803",
    appId: "1:750127990803:web:a067c645a08827be04d7e6",
    measurementId: "G-1S2TE0FWX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
