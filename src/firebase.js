import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuqOqVyeZTktC3VH5k5ywW8AGxkCl-bzc",
  authDomain: "my-mail-498c8.firebaseapp.com",
  projectId: "my-mail-498c8",
  storageBucket: "my-mail-498c8.appspot.com",
  messagingSenderId: "885307027743",
  appId: "1:885307027743:web:c2862408f93bb77eeac02a",
  measurementId: "G-VPQ4NSC9D8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
