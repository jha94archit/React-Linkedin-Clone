import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBfXohzSJfTO11IlPjaEUYLak1040ehik0",
    authDomain: "linkedin-clone-93f01.firebaseapp.com",
    projectId: "linkedin-clone-93f01",
    storageBucket: "linkedin-clone-93f01.appspot.com",
    messagingSenderId: "1087137577083",
    appId: "1:1087137577083:web:f64cef0ee26942550fcade"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };