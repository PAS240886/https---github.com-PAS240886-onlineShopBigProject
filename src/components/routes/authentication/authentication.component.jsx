/*

  import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
  
} from "../../../utils/firebase/firebase.utils";*/

import SignUpForm from "../../sign-up form/sign-up-form.component";

const Authentication = () => {
  /*const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    
  };
*/
  return (
    <div>
      <h1>Sign In Page</h1>
      <button>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default Authentication;

