import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCvoKodvwq9jPz_Juiu0k4QIZpieIw0iKw",
  authDomain: "weight-tracker-5bb0b.firebaseapp.com",
  projectId: "weight-tracker-5bb0b",
  storageBucket: "weight-tracker-5bb0b.appspot.com",
  messagingSenderId: "1000541296051",
  appId: "1:1000541296051:web:2f7b950f1ea0417da6e7c6"
};

  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db};