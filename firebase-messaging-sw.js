importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js");


var firebaseConfig = {
    apiKey: "AIzaSyDLjiNnsvXnYIx_oKm4k0_VEyCgk7Tww_o",
    authDomain: "auth-29.firebaseapp.com",
    projectId: "auth-29",
    storageBucket: "auth-29.appspot.com",
    messagingSenderId: "718208349726",
    appId: "1:718208349726:web:2ba4a1adb09e6dd0ab200f",
    measurementId: "G-9D1H9HZH4Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});