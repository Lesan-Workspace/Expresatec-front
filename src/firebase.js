// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5FCfI4W8wOf2o12GfCAQAnLWAXSfL-zA",
  authDomain: "pre-tesis-486cf.firebaseapp.com",
  projectId: "pre-tesis-486cf",
  storageBucket: "pre-tesis-486cf.appspot.com",
  messagingSenderId: "399671616506",
  appId: "1:399671616506:web:f27e1a493a281033e37a43",
  measurementId: "G-L6C62NZPWF"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export{
   auth,
   app
 }
