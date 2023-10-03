import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcETbdzjiaBdCMVBfOHzxitpCh8aDdB7U",
  authDomain: "sedayishop-4e50f.firebaseapp.com",
  projectId: "sedayishop-4e50f",
  storageBucket: "sedayishop-4e50f.appspot.com",
  messagingSenderId: "874077597057",
  appId: "1:874077597057:web:97c7e9fa31baeccb77cc80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
