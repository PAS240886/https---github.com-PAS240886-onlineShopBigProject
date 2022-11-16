import "./authentication.styles.scss";
import SignUpForm from "../../sign-up form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
