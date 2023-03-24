import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCH-ZvRAf3P8v9orLkVZmdM_ChOWQh5xr4",
  authDomain: "swift-mail-9edca.firebaseapp.com",
  projectId: "swift-mail-9edca",
  storageBucket: "swift-mail-9edca.appspot.com",
  messagingSenderId: "374242918095",
  appId: "1:374242918095:web:df5bc488c08357daa381ba",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
