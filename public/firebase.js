// public/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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
const db = getFirestore(app);

/**
 * Registers a new patient in Firestore.
 * @param {Object} patientData
 */
export async function registerPatient(patientData) {
  const docRef = await addDoc(collection(db, "patients"), patientData);
  return docRef.id;
}

// (You can also export `db` directly if you need it elsewhere)
export { db };
