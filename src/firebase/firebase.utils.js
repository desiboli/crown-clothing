import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA9B5RmNteblWxHsvM3bR6jQbHjXnRYqeY',
  authDomain: 'crown-db-88f19.firebaseapp.com',
  databaseURL: 'https://crown-db-88f19.firebaseio.com',
  projectId: 'crown-db-88f19',
  storageBucket: 'crown-db-88f19.appspot.com',
  messagingSenderId: '151580598573',
  appId: '1:151580598573:web:6412fa20d1b5085335f3a4'
};

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
      console.log('error creating user: ', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
