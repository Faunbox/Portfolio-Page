import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

//Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAwHQvkBQf7ZtXXZaUiDH3KN71PBCIeAOQ",
  authDomain: "filipsojecki-79e2f.firebaseapp.com",
  projectId: "filipsojecki-79e2f",
  storageBucket: "filipsojecki-79e2f.appspot.com",
  messagingSenderId: "339479283508",
  appId: "1:339479283508:web:bae0f008c85a1334694761",
  measurementId: "G-1RCX4LS3KV",
};

firebase.initializeApp(firebaseConfig);

firebase.analytics();
firebase.firestore();
firebase.storage();
firebase.auth();

export const authAnony = () => {
  return firebase.auth().signInAnonymously();
};

export default firebase;
