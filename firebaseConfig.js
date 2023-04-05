import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyn4ekuYzxyyWMZkLaimm1V2aq9VoLghU",
  authDomain: "code-booth.firebaseapp.com",
  projectId: "code-booth",
  storageBucket: "code-booth.appspot.com",
  messagingSenderId: "318730236835",
  appId: "1:318730236835:web:2786192a8d0923cbd1e016"
};

// Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);
 export default firebaseApp