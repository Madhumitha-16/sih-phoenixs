
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzQk3v5uyum2DprHJWr7eo8FC9fJ_lQAQ",
  authDomain: "nalaiyathiran2.firebaseapp.com",
  projectId: "nalaiyathiran2",
  storageBucket: "nalaiyathiran2.appspot.com",
  messagingSenderId: "485740542370",
  appId: "1:485740542370:web:8d06a0322cca0164ccdafb"
};


const app = initializeApp(firebaseConfig);
export const firebase=getFirestore(app);