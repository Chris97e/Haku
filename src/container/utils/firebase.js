import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAMeOLUGndlFJSMv2g58-yWkI-QTGbv-1c",
    authDomain: "haku-9f2a9.firebaseapp.com",
    databaseURL: "https://haku-9f2a9.firebaseio.com",
    projectId: "haku-9f2a9",
    storageBucket: "haku-9f2a9.appspot.com",
    messagingSenderId: "88569184050",
    appId: "1:88569184050:web:7746eb29b3e07ee938612b"
  };

  firebase.initializeApp(firebaseConfig);
  export const fb =firebase;