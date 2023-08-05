   import { initializeApp } from 'firebase/app'
   import { getAuth } from "firebase/auth";
   import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEEii9OOpJFMxw6n0nMMYndfJWEwvMEqI",
  authDomain: "clone-cbf82.firebaseapp.com",
  projectId: "clone-cbf82",
  storageBucket: "clone-cbf82.appspot.com",
  messagingSenderId: "584823565272",
  appId: "1:584823565272:web:550c2af3abe8b3b309a0ad",
  measurementId: "G-TZKH2WNN3R"
};



const firebaseApp= initializeApp(firebaseConfig);

const db= getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
