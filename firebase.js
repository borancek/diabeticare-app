////////////////// API FOR USER LOGIN DETAILS /////////////////////////////
// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0bEdAlAfCQHQRfbzjrLjqpKLLffK_3sY",
  authDomain: "fir-auth-a2201.firebaseapp.com",
  projectId: "fir-auth-a2201",
  storageBucket: "fir-auth-a2201.appspot.com",
  messagingSenderId: "96699052686",
  appId: "1:96699052686:web:6db683bbdc174fe3240fdf"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };

////////////////// API FOR USER LOGIN DETAILS /////////////////////////////