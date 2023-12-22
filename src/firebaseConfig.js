// // import {getAuth ,GoogleAuthProvider} from "firebase/auth";
// // import {initializeApp, getApps, getApp} from "firebase/app";
// // import {getFirestore } from 'firebase/firestore';
// // import {getStorage } from 'firebase/storage';
// import { getDatabase } from 'firebase/database';
// import firebase from 'firebase/compat/app'
// // import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAGdMqXN4bvaWfuy1-XAIEdcIgNEERbhMg",
//   authDomain: "appnew-232a9.firebaseapp.com",
//   databaseURL: "https://appnew-232a9-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "appnew-232a9",
//   storageBucket: "appnew-232a9.appspot.com",
//   messagingSenderId: "645814436166",
//   appId: "1:645814436166:web:dadf169ca110d1da74e547",
//   measurementId: "G-LSKNGQN3S4"
// }
// // Initialize Firebase

// // https://appnew-232a9-default.asia-southeast1.firebaseio.com

// if(firebase.apps.length === 0){
//   firebase.initializeApp(firebaseConfig);
// }
// // const analytics = getAnalytics(app);
// // export const auth=getAuth(appy);
// // export const googleProvider = new GoogleAuthProvider();

// // export const storage=getStorage(appy);
// // export const db= getFirestore(appy);
// export const rdb= getDatabase();




import { getDatabase } from 'firebase/database';
import firebase from 'firebase/compat/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4MDz3X6aFscHSYYUQJh2oBfjBPEy-lYU",
  authDomain: "esp-demo-17ed1.firebaseapp.com",
  databaseURL: "https://esp-demo-17ed1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp-demo-17ed1",
  storageBucket: "esp-demo-17ed1.appspot.com",
  messagingSenderId: "265923535250",
  appId: "1:265923535250:web:7c05882460f47b8682214b"
};


if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
export const rdb= getDatabase();