import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyChMm4Pvv-b5pwbmcdiTSoLxjEOWxnJ_MI",
    authDomain: "facebook-clone-cf621.firebaseapp.com",
    databaseURL: "https://facebook-clone-cf621.firebaseio.com",
    projectId: "facebook-clone-cf621",
    storageBucket: "facebook-clone-cf621.appspot.com",
    messagingSenderId: "198497281511",
    appId: "1:198497281511:web:e551fa5bd15169e2190942",
    measurementId: "G-5YXC8S9QZR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;