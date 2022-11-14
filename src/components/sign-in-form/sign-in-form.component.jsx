import { useState } from "react";
import "./sign-up-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  UserName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { UserName, email, password, confirmPassword } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("passwords do not mathc");
      return;
    }

    try {
      const { user } = createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { UserName });
      resetFormFields();
    } catch (error) {
      if ((error.code = "auth/email-already-in-use")) {
        alert("Cannot create user, email already in use");
      } else {
        console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign-Up with email </span>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <FormInput
          label="User Name"
          type="text"
          required
          onChange={handleChange}
          name="UserName"
          value={UserName}
        />

        <label>Email</label>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Submit </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
