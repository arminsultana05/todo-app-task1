// import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAHzAkPAKPP59MtpE3tc5QF05MbjvfrGQI",
  authDomain: "todo-app-task1.firebaseapp.com",
  projectId: "todo-app-task1",
  storageBucket: "todo-app-task1.appspot.com",
  messagingSenderId: "16638400809",
  appId: "1:16638400809:web:b862af90374cb96c22ff38"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;