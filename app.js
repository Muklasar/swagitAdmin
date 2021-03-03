

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const messaging = firebase.messaging();
messaging.requestPermission()
    .then(function () {
        console.log('Have permission')
        return messaging.getToken();
    })
    .then(function (token) {
        console.log(token)
    })
    .catch(function (err) {
        console.log('error Occured')
    })

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({ vapidKey: '756142162673' }).then((currentToken) => {
    if (currentToken) {
        console.log(currentToken)
        // Send the token to your server and update the UI if necessary
        // ...
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});


