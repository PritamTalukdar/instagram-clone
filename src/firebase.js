import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0v-Z0tSV9OBX9shylPoU1RHZO7NBL_lg",
    authDomain: "instagram-clone-707e8.firebaseapp.com",
    databaseURL: "https://instagram-clone-707e8.firebaseio.com",
    projectId: "instagram-clone-707e8",
    storageBucket: "instagram-clone-707e8.appspot.com",
    messagingSenderId: "690360695808",
    appId: "1:690360695808:web:748fc2b30f140c5049ace5"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export { db, auth, storage};