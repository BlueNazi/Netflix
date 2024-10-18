import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyClc0DYCWQSbKIomLJsvxfM8dRtlczph9M",
  authDomain: "netflix-c9e9f.firebaseapp.com",
  projectId: "netflix-c9e9f",
  storageBucket: "netflix-c9e9f.appspot.com",
  messagingSenderId: "138086134692",
  appId: "1:138086134692:web:beb65f4782ffda0549c731"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuth = new GoogleAuthProvider()