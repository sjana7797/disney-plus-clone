import { initializeApp, getApps, getApp } from "firebase/app";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHRDG4h4nxoTsOlmpTGQvJSdJdsR-gNlg",
  authDomain: "lustrous-jet-319905.firebaseapp.com",
  databaseURL: "https://lustrous-jet-319905-default-rtdb.firebaseio.com",
  projectId: "lustrous-jet-319905",
  storageBucket: "lustrous-jet-319905.appspot.com",
  messagingSenderId: "243376341690",
  appId: "1:243376341690:web:b895f99c1d78e97fbdb883",
  measurementId: "G-J04TVGJV46",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export { app };
