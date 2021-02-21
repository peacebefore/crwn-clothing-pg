import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC_MJ9eItRKh6LYLuBKCH2kgLHXVOFojM8",
  authDomain: "crwn-db-71b48.firebaseapp.com",
  databaseURL: "https://crwn-db-71b48-default-rtdb.firebaseio.com",
  projectId: "crwn-db-71b48",
  storageBucket: "crwn-db-71b48.appspot.com",
  messagingSenderId: "874581160392",
  appId: "1:874581160392:web:b1ace56e860177126bd0fd",
  measurementId: "G-DKPRD6D0D3"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;