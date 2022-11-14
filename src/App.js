import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import SignUpForm from "./components/sign-up form/sign-up-form.component";

const Shop = () => {
  return <h1> SHOP </h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />
        <Route path="auth" element={<SignUpForm />} />
      </Route>
    </Routes>
  );
};

export default App;
