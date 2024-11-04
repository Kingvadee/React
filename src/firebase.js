import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfKQjT2EmDH6eJTAED73zz151YhmL_Aus",
  authDomain: "tonofgem.firebaseapp.com",
  projectId: "tonofgem",
  storageBucket: "tonofgem.firebasestorage.app",
  messagingSenderId: "1041276227847",
  appId: "1:1041276227847:web:96bedceeb798fcd5cd75a2",
  measurementId: "G-9SS5GT7XVM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
