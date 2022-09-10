import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJZVv21ouhXa-xR3MeZtnVJAl8w0aL8lY",
  authDomain: "pandafood-86f29.firebaseapp.com",
  databaseURL: "https://pandafood-86f29-default-rtdb.firebaseio.com",
  projectId: "pandafood-86f29",
  storageBucket: "pandafood-86f29.appspot.com",
  messagingSenderId: "562075572956",
  appId: "1:562075572956:web:d8f0e745ad32ff65393219",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
