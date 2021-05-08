import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCLFEBzh717FyTjqZWuHGkL4xyh1EO1P2Q",
  authDomain: "linkedin-clone-app-fc849.firebaseapp.com",
  projectId: "linkedin-clone-app-fc849",
  storageBucket: "linkedin-clone-app-fc849.appspot.com",
  messagingSenderId: "130466236864",
  appId: "1:130466236864:web:19dd79f20ca85f5be0e025",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
