importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');


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

// navigator.serviceWorker.getRegistrations().then(function(registrations) { for(let registration of registrations) { registration.unregister() } })


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

// messaging.getToken({ vapidKey: 'BApI0asOcygMhR0DdrE-6-D15PHOQOtHOvZKP1RxedHu3bqDTyuyIE3lXb-1LkJoOqDP2Q9kfWWT9TKzfgz61Ak' }).then((currentToken) => {
//   if (currentToken) {
//       console.log(currentToken)
//       // ...
//   } else {
//       // Show permission request UI
//       console.log('No registration token available. Request permission to generate one.');
//       // ...
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   // ...
// });