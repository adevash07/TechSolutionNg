import Header from "layouts/header/Header";
import LoginAside from "layouts/login/loginAside/LoginAside";
import { LoginForm } from "layouts/login/loginForm/LoginForm";

import "./login.scss";

const Login = () => {
  return (
    <>
      <Header loginPage={true} />
      <div className="loginPage">
        <div className="loginPage__AsideForm">
          <LoginAside />
          <LoginForm />
        </div>
      </div>
    </>
  ); 
};

export default Login;
