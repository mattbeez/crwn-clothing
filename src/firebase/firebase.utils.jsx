import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyBDwukuQ9sVPB0v4Cyj5cXRalEqA30k3Ls",
    authDomain: "crwn-db-33f3b.firebaseapp.com",
    projectId: "crwn-db-33f3b",
    storageBucket: "crwn-db-33f3b.appspot.com",
    messagingSenderId: "656390930460",
    appId: "1:656390930460:web:080e50c6b4748de31fdfd9",
    measurementId: "G-0P7EWGL89E"
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;