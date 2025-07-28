// src/firebase/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyADWiYuQb8Hm1n7VkVpO9KgccGP8HTCnUo",
  authDomain: "cabs-b1616.firebaseapp.com",
  projectId: "cabs-b1616",
  storageBucket: "cabs-b1616.appspot.com",
  messagingSenderId: "16197080726",
  appId: "1:16197080726:web:15244b094efb956e6d4b7",
  measurementId: "G-DEWF80YG3F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
