import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBHAt78_Sb2dCbk7VlzTmbh9v9F1CEQMQ4",
    authDomain: "ui-portal-cc109.firebaseapp.com",
    databaseURL: "https://ui-portal-cc109-default-rtdb.firebaseio.com",
    projectId: "ui-portal-cc109",
    storageBucket: "ui-portal-cc109.appspot.com",
    messagingSenderId: "121921161593",
    appId: "1:121921161593:web:667edbafa60d83b7e007a8"
};
const fire_db = firebase.initializeApp(firebaseConfig);

export default fire_db;