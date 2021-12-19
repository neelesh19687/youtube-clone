
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import{getAuth} from 'firebase/auth'
import {getStorage } from 'firebase/storage'

const Config = {
  apiKey: "AIzaSyBhf0S022xrtkg3XCMVYNO2sZdVfvUkcuA",
  authDomain: "ytclone-292ed.firebaseapp.com",
  databaseURL: "https://ytclone-292ed-default-rtdb.firebaseio.com",
  projectId: "ytclone-292ed",
  storageBucket: "ytclone-292ed.appspot.com",
  messagingSenderId: "906425047540",
  appId: "1:906425047540:web:aaa2130e30901dda9dc1a1",
  measurementId: "G-ZCL6MYQW7S"
};

const app = initializeApp(Config);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);

export  {db,auth,storage}
