import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-Z6QFZS2ePHbmeXBSrZrYv5j2Z8_DuT4",
  authDomain: "testing-19dfb.firebaseapp.com",
  projectId: "testing-19dfb",
  storageBucket: "testing-19dfb.appspot.com",
  messagingSenderId: "293134578251",
  appId: "1:293134578251:web:2291b4f19e32c4cdd313ce",
  measurementId: "G-9MLDD2NYTR"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export default firebaseApp;