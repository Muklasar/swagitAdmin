// importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js")

var firebaseConfig = {
    apiKey: "AIzaSyDOralpZ69Eh_YMOHWR8LHRPtKZTBQFtMs",
    authDomain: "swagit-authentication.firebaseapp.com",
    databaseURL: "https://swagit-authentication-default-rtdb.firebaseio.com",
    projectId: "swagit-authentication",
    storageBucket: "swagit-authentication.appspot.com",
    messagingSenderId: "756142162673",
    appId: "1:756142162673:web:133a71fdd7f5c2a0b61f50",
    measurementId: "G-R2BLQHPN4N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



const messaging = firebse.messaging();
messaging.requestPermission()
    .then(function () {
        console.log('Have permission')
    })
    .then(function (token) {
        console.log(token)
    })
    .catch(function (err) {
        console.log('error Occured')
    })
