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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
