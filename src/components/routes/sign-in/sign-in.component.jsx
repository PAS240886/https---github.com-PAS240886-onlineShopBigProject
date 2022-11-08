/*
  import {useEffect} from 'react;
  import {getRedirectResult} from 'firebase/auth';  
  
  import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from "../../../utils/firebase/firebase.utils";*/

const SignIn = () => {
  /*const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    
    const logGoogleUserRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
*/
  return (
    <div>
      <h1>Sign In Page</h1>
      <button>Sign in with Google Popup</button>
      <button>Sign in with Google Redirect</button>
    </div>
  );
};

export default SignIn;
