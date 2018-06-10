import Rebase from 're-base';
import firebase from 'firebase';


const app = firebase.initializeApp({
  apiKey: "AIzaSyCuiAXPsDu4a9AMUVmMp_d-WqV-XTq0qLE",
  authDomain: "spin-f83e9.firebaseapp.com",
  databaseURL: "https://spin-f83e9.firebaseio.com"
});
export const rebase = Rebase.createClass(app.database());

// //add the authProvides your app needs: google, facebook, twitter, github,
export const googleProvider = new firebase.auth.GoogleAuthProvider();







// import Rebase from 're-base';
// import firebase from 'firebase';
// import Dotenv from 'dotenv';



//   const config = {
//     apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
//   };


//   const app = firebase.initializeApp(config);
//   // const base = Rebase.createClass(app.database());

//   // export { base }

// // // //add the authProvides your app needs: google, facebook, twitter, github,
// // export const googleProvider = new firebase.auth.GoogleAuthProvider();