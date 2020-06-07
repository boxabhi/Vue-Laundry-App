


import * as firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyB8km7SNc1sE5TrN-M13v7CAiKCwWmzc4g",
    authDomain: "laundry-39ae2.firebaseapp.com",
    databaseURL: "https://laundry-39ae2.firebaseio.com",
    projectId: "laundry-39ae2",
    storageBucket: "laundry-39ae2.appspot.com",
    messagingSenderId: "483612276970",
    appId: "1:483612276970:web:ea875164b37b70b4627f93",
    measurementId: "G-9SLBWQCNTD"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const messaging = firebase.messaging();
  
  messaging.usePublicVapidKey("BLAfcVojW3wCekeR0EnsNNGTGKJrPSdgzWpRVfzDrvKB-MZi5xtJTZ96Q925SWyJZENM7pwj3owGU-sGfHBjM7o");
  
  
  messaging.requestPermission().then(() => {
    
    messaging.getToken().then((token) => {
     console.log(token)
    })
  }).catch((err) => {
    console.log('Unable to get permission to notify.', err);
  });
  