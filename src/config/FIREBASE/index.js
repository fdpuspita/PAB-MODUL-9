import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyCN1TuHBep_tLdQ96SiWY1WAWU05InzTjk",
    authDomain: "noteapp-b7d3f.firebaseapp.com",
    databaseURL: "https://noteapp-b7d3f-default-rtdb.firebaseio.com",
    projectId: "noteapp-b7d3f",
    storageBucket: "noteapp-b7d3f.appspot.com",
    messagingSenderId: "852777682271",
    appId: "1:852777682271:web:e4ffdbdcc9405060d322ea",
    measurementId: "G-WEDQYZVD0T"
});

const FIREBASE = firebase;

export default FIREBASE;