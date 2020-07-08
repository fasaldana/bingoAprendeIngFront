import app from "firebase/app";
import firebase from "firebase"

const config = {
    apiKey: "AIzaSyBIxH1QEFVh5hZDDXyVOiz_H4a-kIQeeYI",
    authDomain: "bingoaprendeingles.firebaseapp.com",
    databaseURL: "https://bingoaprendeingles.firebaseio.com",
    projectId: "bingoaprendeingles",
    storageBucket: "bingoaprendeingles.appspot.com",
    messagingSenderId: "256944662432",
    appId: "1:256944662432:web:8360c71ede429bd94fa6c5",
    measurementId: "G-178W9H8S3G"
  };

  firebase.initializeApp(config)
  const storage = firebase.storage().ref()

  export default storage;