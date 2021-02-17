import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyC4dAIeBizUQbXeOMZeoNg6jDhrNICdx_A",
    authDomain: "willyapp-6bd3e.firebaseapp.com",
    projectId: "willyapp-6bd3e",
    storageBucket: "willyapp-6bd3e.appspot.com",
    messagingSenderId: "458957077368",
    appId: "1:458957077368:web:c6bfa573c69fcbdc57e68d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()