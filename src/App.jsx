import logo from "./logo.svg";
import "./App.css";
import InformationPages from "./pages/InformationPages";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import axios from "axios";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAkDLtObV58nsxlgewhHqUUhCdxHbOyfA",
  authDomain: "test-one-a8515.firebaseapp.com",
  projectId: "test-one-a8515",
  storageBucket: "test-one-a8515.appspot.com",
  messagingSenderId: "346493013590",
  appId: "1:346493013590:web:7f80f9f6125d73cca835f7",
  measurementId: "G-9WRSKG7LLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

////////// AXIOS CONFIG //////////
if (window.location.hostname === "localhost")
  axios.defaults.baseURL =
    "http://localhost:5001/roozhackbackend/asia-southeast1/apiV1/";
else axios.defaults.baseURL = "";

if (window.location.hostname === "localhost") {
  const authInstance = getAuth();
  connectAuthEmulator(authInstance, "http://localhost:9099");
  const storageInstance = getStorage();
  connectStorageEmulator(storageInstance, "localhost", 9199);
}

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
