import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUsV_d6kwTaaz2EEGHMIu5TGmcqgkl0T0",
  authDomain: "spotifyclone-83b96.firebaseapp.com",
  projectId: "spotifyclone-83b96",
  storageBucket: "spotifyclone-83b96.appspot.com",
  messagingSenderId: "357250542690",
  appId: "1:357250542690:web:ca62ee94f09c1ca62f753b",
  measurementId: "G-MF2CN86VZM",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export const serverTime = firebase.firestore.FieldValue.serverTimestamp();

export default db;
