import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBKjCFd64ekY0G-OfpmahmjuFW82AuooKA',
  authDomain: 'form-task-26bda.firebaseapp.com',
  projectId: 'form-task-26bda',
  storageBucket: 'form-task-26bda.appspot.com',
  messagingSenderId: '35187836495',
  appId: '1:35187836495:web:d0fcf3b11375bf6112cc3a',
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
