import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {  
    apiKey: "AIzaSyBLGsEYJ01V9tZxpV4bhZRJgvrgp1kYujU",
    authDomain: "react-portafolio-2c88f.firebaseapp.com",
    projectId: "react-portafolio-2c88f",
    storageBucket: "react-portafolio-2c88f.appspot.com",
    messagingSenderId: "788727612617",
    appId: "1:788727612617:web:17eca84e02d0d112a1b918"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();
