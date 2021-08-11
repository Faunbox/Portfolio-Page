import firebase from "firebase/app";
import "firebase/firestore"

export const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBn9anwSGhQUzrjoPhiZSzUTRlQBjlFSCw",
  authDomain: "fsoj-35b6d.firebaseapp.com",
  projectId: "fsoj-35b6d",
  storageBucket: "fsoj-35b6d.appspot.com",
  messagingSenderId: "180511850520",
  appId: "1:180511850520:web:6379b6a2b138a4ec61c36d",
});

export const db = firebaseConfig.firestore();
