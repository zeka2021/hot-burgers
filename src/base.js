import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDmdFx-zRk-mhpuvRZ0UAtvVfA4CQr-SXY",
    authDomain: "hot-burger-2bcc7.firebaseapp.com",
    databaseURL: "https://hot-burger-2bcc7-default-rtdb.firebaseio.com",
    //   projectId: "hot-burger-2bcc7",
    //   storageBucket: "hot-burger-2bcc7.appspot.com",
    //   messagingSenderId: "734593243312",
    //   appId: "1:734593243312:web:8d0cab3c08722f6c508375"
});
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;