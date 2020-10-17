import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD050sPd1bMqqN-VNkcZ2dg1OV6WjnvFJ0",
  authDomain: "react-firegram-61df2.firebaseapp.com",
  databaseURL: "https://react-firegram-61df2.firebaseio.com",
  projectId: "react-firegram-61df2",
  storageBucket: "react-firegram-61df2.appspot.com",
  messagingSenderId: "494040016323",
  appId: "1:494040016323:web:05ad8fd95c5aa337404976",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
