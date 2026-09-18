importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBJXow-n2fauk3Lfaq5Rw7jxg3LLcKsyMU",
  authDomain: "expert-predict-7b860.firebaseapp.com",
  projectId: "expert-predict-7b860",
  storageBucket: "expert-predict-7b860.firebasestorage.app",
  messagingSenderId: "1042363145863",
  appId: "1:1042363145863:web:4da5da0b670aa457d06222"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background message:', payload);
  const title = payload.notification.title;
  const options = {
    body: payload.notification.body,
    icon: 'icon-512.png'
  };
  self.registration.showNotification(title, options);
});
