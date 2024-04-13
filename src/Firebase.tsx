import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV8JevmkXOhNeds3dHSJyDjdUZLsPNnp8",
  authDomain: "ckkb-86b3e.firebaseapp.com",
  projectId: "ckkb-86b3e",
  storageBucket: "ckkb-86b3e.appspot.com",
  messagingSenderId: "910913108063",
  appId: "1:910913108063:web:8b4b8b8cd5d0ae1ce983ea",
  measurementId: "G-VZ20TQYMPX",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
