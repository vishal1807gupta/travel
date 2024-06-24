// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEdHwmW8Q1LiwmKlqhxFSGgi_ZPIOPLs4",
  authDomain: "travel-daabd.firebaseapp.com",
  projectId: "travel-daabd",
  storageBucket: "travel-daabd.appspot.com",
  messagingSenderId: "63151213106",
  appId: "1:63151213106:web:01f490279793bf851c0a2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
