import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_kvqSP7uPPA05ELIXabyyw8_iWmU-nLg",
  authDomain: "olxclone-28f6b.firebaseapp.com",
  projectId: "olxclone-28f6b",
  storageBucket: "olxclone-28f6b.appspot.com",
  messagingSenderId: "1070641226266",
  appId: "1:1070641226266:web:454d70b76beade96db67a3",
  measurementId: "G-DQQZYNQT2E"
};

 export default firebase.initializeApp(firebaseConfig) 