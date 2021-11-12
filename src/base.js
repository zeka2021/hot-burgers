import Rebase from 're-base';
import firebase from 'firebase/app';
require('firebase/database');


const firebaseApp = firebase.initializeApp({
 apiKey: "AIzaSyDICPBi-95h508cbi11Vw4Olqz2gP2SnEs",
  authDomain: "very-hot-burfers.firebaseapp.com",
  databaseURL: "https://very-hot-burfers-default-rtdb.europe-west1.firebasedatabase.app",
    //   projectId: "hot-burger-2bcc7",
    //   storageBucket: "hot-burger-2bcc7.appspot.com",
    //   messagingSenderId: "734593243312",
    //   appId: "1:734593243312:web:8d0cab3c08722f6c508375"
});
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;