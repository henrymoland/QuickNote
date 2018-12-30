import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAlIgIn-7EUsdn74pNA3HD2JN6Iz8Gd8Sc",
    authDomain: "quicknote209.firebaseapp.com",
    databaseURL: "https://quicknote209.firebaseio.com",
    projectId: "quicknote209",
    storageBucket: "quicknote209.appspot.com",
    messagingSenderId: "762277026368"
  };
  
  firebase.initializeApp(config);
  firebase.firestore().settings( { timestampsInSnapshots: true });

  export default firebase;