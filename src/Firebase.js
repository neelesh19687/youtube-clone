
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import{getAuth} from 'firebase/auth'


const Config = {
    apiKey: "AIzaSyBhf0S022xrtkg3XCMVYNO2sZdVfvUkcuA",
  authDomain: "ytclone-292ed.firebaseapp.com",
  projectId: "ytclone-292ed",
  storageBucket: "ytclone-292ed.appspot.com",
  messagingSenderId: "906425047540",
  appId: "1:906425047540:web:107b3f804a441a5b9dc1a1",
  measurementId: "G-R3EBCMB6QN"
};

const app = initializeApp(Config);
const auth = getAuth(app)
const db = getFirestore(app);


export  {db,auth}
