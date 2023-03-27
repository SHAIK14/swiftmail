// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyCH-ZvRAf3P8v9orLkVZmdM_ChOWQh5xr4",
//   authDomain: "swift-mail-9edca.firebaseapp.com",
//   projectId: "swift-mail-9edca",
//   storageBucket: "swift-mail-9edca.appspot.com",
//   messagingSenderId: "374242918095",
//   appId: "1:374242918095:web:df5bc488c08357daa381ba",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// // const auth = firebase.auth();
// const auth = getAuth(firebase);
// const provider = new firebase.auth.GoogleAuthProvider();

// export { db, auth, provider };
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

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
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
