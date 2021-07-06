// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
   apiKey: "AIzaSyAi56fSzb1XrkywdWustuy6EEz1eqTVp9g",
   authDomain: "aprendendo-firebase-3644e.firebaseapp.com",
   projectId: "aprendendo-firebase-3644e",
   storageBucket: "aprendendo-firebase-3644e.appspot.com",
   messagingSenderId: "641686661029",
   appId: "1:641686661029:web:52c1888b331156e8b1ea4c",
   measurementId: "G-SV6F0EJDQ8",
};
// Initialize Firebase
// firebase.analytics();
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

db.collection("turmaA");
