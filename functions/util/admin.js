const admin = require("firebase-admin");
const firebase = require("firebase/app");
const { getAuth, connectAuthEmulator } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyAxmLdif1IyS8ZMkvMBi6s4qWAMY00Vu18",
  authDomain: "dormitory-contracts-marketing.firebaseapp.com",
  projectId: "dormitory-contracts-marketing",
  storageBucket: "dormitory-contracts-marketing.appspot.com",
  messagingSenderId: "771964150847",
  appId: "1:771964150847:web:fd834b9b9230eb21f2448a"
};

admin.initializeApp();
const db = admin.firestore();

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);

if (process.env.FIREBASE_AUTH_EMULATOR_HOST)
  connectAuthEmulator(auth, "http://localhost:9099");
module.exports = { admin, db, auth };