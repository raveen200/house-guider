import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbcgZtWcNxG66NdZpX4tMRkYgxNarfbYI",
  authDomain: "houseguider17.firebaseapp.com",
  databaseURL: "https://houseguider17-default-rtdb.firebaseio.com",
  projectId: "houseguider17",
  storageBucket: "houseguider17.appspot.com",
  messagingSenderId: "883474368984",
  appId: "1:883474368984:web:5f11dac2b1716f7d6f4aad",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const firestore = getFirestore(app);

const storage = getStorage(app);

export { firestore, storage, app };
