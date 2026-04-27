import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC0KVTQZFmLDsJ1BI1GowH5Phb5fVh51Nc",
  authDomain: "developers-hub-902af.firebaseapp.com",
  projectId: "developers-hub-902af",
  storageBucket: "developers-hub-902af.firebasestorage.app",
  messagingSenderId: "919269686273",
  appId: "1:919269686273:web:8e916351805321c1b45400"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);  