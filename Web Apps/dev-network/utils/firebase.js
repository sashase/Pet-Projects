// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase"
import { getFireStore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: procces.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: procces.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: procces.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: procces.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: procces.env.NEXT_PUBLIC_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFireStore(auth)
