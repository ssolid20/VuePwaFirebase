import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAk1-iQZS_PCgLEFTR53oLTX0_GGINJeIc",
    authDomain: "addtomypwacalc.firebaseapp.com",
    databaseURL: "https://addtomypwacalc.firebaseio.com",
    projectId: "addtomypwacalc",
    storageBucket: "addtomypwacalc.appspot.com",
    messagingSenderId: "892827834614",
    appId: "1:892827834614:web:3e72321bd6d38459d8f4d7"
  };
  // Initialize Firebase

  const x  = firebase.initializeApp(firebaseConfig);
  x.firestore().settings({timestampsInSnapshots:true})
  export default x.firestore()