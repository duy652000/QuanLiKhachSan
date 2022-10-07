import React, { createContext, useState, useEffect } from "react";
import LoginForm from "../../src/components/login/LoginForm";
import LogoutForm from "../components/logout/LogoutForm";

function LoginPage() {
  {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({ email: "" });
    const [error, setError] = useState("");
 
    const adminUser = [
      {
        email: "vokhanhduy2000@gmail.com",
        password: "123123",
      },
      {
        email: "vokhanhduy@gmail.com",
        password: "123",
      },
      ,
      {
        email: "vkd@gmail.com",
        password: "12345",
      },
    ];

   

    const Login = (details) => {
      const checkTrueEmail = (element) => element.email == details.email;
      const checkTruePass = (element) => element.password == details.password;
      const checkFalseEmail = (element) => element.email !== details.email;
      const checkFalsePass = (element) => element.password !== details.password;
      const checkFull = (element) =>
        element.email == details.email && element.password == details.password;
    

      if (adminUser.some(checkFull)) {
        setAuth(true);
        setUser({ email: details.email });
      } else if (details.email === "" && details.password === "") {
        setAuth(false);
        setError(" Xin vui lòng nhập đầy đủ Email và Password !");
      } else if (details.email === "") {
        setAuth(false);
        setError("Xin vui lòng nhập đầy đủ Email !");
      } else if (details.password === "") {
        setAuth(false);
        setError("Xin vui lòng nhập đầy đủ Password !");
      } else if (adminUser.some(checkFalsePass) && adminUser.some(checkTrueEmail)) {
        setError("password không đúng . Xin vui lòng nhập lại !");
      } else if (adminUser.some(checkFalseEmail) && adminUser.some(checkTruePass)){
        setError("email không tồn tại . Xin vui lòng nhập lại !");
        // window.location.reload();

      }
      else if (adminUser.some(checkFalsePass) && adminUser.some(checkFalseEmail)) {
        setError("email và password không đúng . Xin vui lòng nhập lại !");}
    };

    const Logout = (e) => {
      setUser({ email: "" });
      setError("");
      e.preventDefault();
    };

    return (
      <div className="App">
        {user.email != "" ? (
          <LogoutForm logOut={Logout} data={user.email} />
        ) : (
          <LoginForm auth={auth} Login={Login} error={error} />
        )}
      </div>
    );
  }
}

export default LoginPage;
