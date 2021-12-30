import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

import 'firebase/compat/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDn28p7tjCHHqe_8_AJ2qOHicbgqpzAY9U",
    authDomain: "curso-9ee0c.firebaseapp.com",
    projectId: "curso-9ee0c",
    storageBucket: "curso-9ee0c.appspot.com",
    messagingSenderId: "140887290168",
    appId: "1:140887290168:web:ab0f6b27da03146e9dd1cd",
    measurementId: "G-LNPCTV2N86"
  };
  
  if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;
