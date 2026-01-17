// js/firebase-config.js

// Firebase SDKs - Updated to v12.8.0
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, 
         createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signOut, 
         onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore, 
         doc, 
         getDoc, 
         setDoc, 
         collection, 
         query, 
         where, 
         getDocs, 
         updateDoc, 
         deleteDoc,
         serverTimestamp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js"; 
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";


// Your web app's NEW Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGYRYTiUqRzWF0Snscb9-gomfyew7mCNY",
  authDomain: "medhajachai-7923d.firebaseapp.com",
  projectId: "medhajachai-7923d",
  storageBucket: "medhajachai-7923d.firebasestorage.app",
  messagingSenderId: "1051446943068",
  appId: "1:1051446943068:web:9b0489862f6b8b9e227599",
  measurementId: "G-6BL4K8XHM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app); 

export { 
  app, 
  auth, 
  db, 
  analytics,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  serverTimestamp 
};
