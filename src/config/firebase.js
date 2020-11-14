import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyChcRFrHjvJPMudacg4eLB3tZvRfEuSJ3Y",
  authDomain: "social-auth-35a25.firebaseapp.com",
  databaseURL: "https://social-auth-35a25.firebaseio.com",
  projectId: "social-auth-35a25",
  storageBucket: "social-auth-35a25.appspot.com",
  messagingSenderId: "609177087961",
  appId: "1:609177087961:web:923331413108d6840073c8",
  measurementId: "G-D9VB0T7RZ3"
};
export const firebase2 = firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth
export const db = firebase.database()
export const storage = firebase.storage()