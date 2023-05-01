// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD33l6wwEyEHhfmt704zoLOYJ2L30NahV0",
  authDomain: "emha-john-react-firebase.firebaseapp.com",
  projectId: "emha-john-react-firebase",
  storageBucket: "emha-john-react-firebase.appspot.com",
  messagingSenderId: "752211581940",
  appId: "1:752211581940:web:8d45d100389eed5b05b7a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;