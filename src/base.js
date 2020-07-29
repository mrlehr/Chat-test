// import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/database'


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2OSAumCv0MIu3_QSNhvpXvLwewx2ukJg",
  authDomain: "chatbox-a2f35.firebaseapp.com",
  databaseURL: "https://chatbox-a2f35.firebaseio.com",
  projectId: "chatbox-a2f35",
  storageBucket: "chatbox-a2f35.appspot.com",
  messagingSenderId: "600107572144",
  appId: "1:600107572144:web:f55e826c09066c19905475",
  measurementId: "G-28VV4T7PQ5"
});

const base = Rebase.createClass(firebase.database())

export { firebaseApp }


export default base;
////////////////////////////////////////////////////////////////////////////////////////////


// const firebaseConfig = {
//   apiKey: "AIzaSyB2OSAumCv0MIu3_QSNhvpXvLwewx2ukJg",
//   authDomain: "chatbox-a2f35.firebaseapp.com",
//   databaseURL: "https://chatbox-a2f35.firebaseio.com",
//   projectId: "chatbox-a2f35",
//   storageBucket: "chatbox-a2f35.appspot.com",
//   messagingSenderId: "600107572144",
//   appId: "1:600107572144:web:f55e826c09066c19905475",
//   measurementId: "G-28VV4T7PQ5"
// };
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();