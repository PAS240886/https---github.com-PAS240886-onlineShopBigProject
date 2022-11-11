import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js" /*"firebase/app"*/;
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js" /*"firebase/auth"*/;
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js" /*"firebase/firestore"*/;

const firebaseConfig = {
  apiKey: "AIzaSyC4bGUwDdfSWf36zqNz_JQTYQIO_IJvrLE",
  authDomain: "onlineshopbigproject.firebaseapp.com",
  projectId: "onlineshopbigproject",
  storageBucket: "onlineshopbigproject.appspot.com",
  messagingSenderId: "759204946254",
  appId: "1:759204946254:web:d676dde9792a44c934be1f",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
