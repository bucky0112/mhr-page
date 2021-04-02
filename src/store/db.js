// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA-sLbBiDk9qTRELLb-_XAhLqhfRsVo_zE',
  authDomain: 'mhw-page.firebaseapp.com',
  projectId: 'mhw-page',
  storageBucket: 'mhw-page.appspot.com',
  messagingSenderId: '609122995742',
  appId: '1:609122995742:web:7cd0b79e25a5f9b9fe280f',
  measurementId: 'G-1PP30G7FXW',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();

export default db;
