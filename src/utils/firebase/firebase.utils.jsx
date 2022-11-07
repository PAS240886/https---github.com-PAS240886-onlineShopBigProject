import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4bGUwDdfSWf36zqNz_JQTYQIO_IJvrLE",
  authDomain: "onlineshopbigproject.firebaseapp.com",
  projectId: "onlineshopbigproject",
  storageBucket: "onlineshopbigproject.appspot.com",
  messagingSenderId: "759204946254",
  appId: "1:759204946254:web:d676dde9792a44c934be1f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc (userDocRef)
};
