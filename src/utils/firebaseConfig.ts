import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAccVwTwWPRmapggCsW9vMSjB3MdGCTTxs",
  authDomain: "meet-up-ae75a.firebaseapp.com",
  projectId: "meet-up-ae75a",
  storageBucket: "meet-up-ae75a.appspot.com",
  messagingSenderId: "804446576816",
  appId: "1:804446576816:web:77578850113b6d7d871b75",
  measurementId: "G-YPSNV6WN0K"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
