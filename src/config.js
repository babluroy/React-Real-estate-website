import firebase from 'firebase'
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyA-y0kVsU-5iCaq1fQHs8brS8ocKQgXLwA",
  authDomain: "react-real-estate-1b202.firebaseapp.com",
  databaseURL: "https://react-real-estate-1b202-default-rtdb.firebaseio.com",
  projectId: "react-real-estate-1b202",
  storageBucket: "react-real-estate-1b202.appspot.com",
  messagingSenderId: "346482817664",
  appId: "1:346482817664:web:14ad5a53c0193625e70465"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  const auth = firebase.auth();

  export const storage  = firebase.storage();

  export {auth};

  export {database};
