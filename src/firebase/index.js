import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA6k_rWdoyhIqx0G7n3nkIc7YpzC31bkgc",
    authDomain: "assignment-front-end-15e66.firebaseapp.com",
    databaseURL: "https://assignment-front-end-15e66.firebaseio.com",
    projectId: "assignment-front-end-15e66",
    storageBucket: "assignment-front-end-15e66.appspot.com",
    messagingSenderId: "317936604002",
    appId: "1:317936604002:web:36be6207c35ead9a74d23b"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase