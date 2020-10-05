if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
var firebaseConfig = {
  "projectId": "asagaya-dd70b",
  "appId": "1:382854634121:web:5820769a0632930d5f8458",
  "databaseURL": "https://asagaya-dd70b.firebaseio.com",
  "storageBucket": "asagaya-dd70b.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyCoDX19Qo30ZZZu6XLpvF1OPmd_-OfmRX4",
  "authDomain": "asagaya-dd70b.firebaseapp.com",
  "messagingSenderId": "382854634121",
  "measurementId": "G-5GPB1C3ME1"
};
if (firebaseConfig) {
  firebase.initializeApp(firebaseConfig);
}
