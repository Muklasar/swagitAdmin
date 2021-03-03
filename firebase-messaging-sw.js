importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js")


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
