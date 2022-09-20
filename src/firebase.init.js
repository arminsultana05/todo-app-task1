import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyC1bb8UIe81x4euV_eR9243YBEexvNrZMQ",
    authDomain: "todo-app-job-task.firebaseapp.com",
    projectId: "todo-app-job-task",
    storageBucket: "todo-app-job-task.appspot.com",
    messagingSenderId: "210465354189",
    appId: "1:210465354189:web:115455b598f5dcc54a1484"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;