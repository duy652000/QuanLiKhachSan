import React, { createContext, useState,useEffect } from "react";
import LoginForm from "../../src/components/login/LoginForm";
import LogoutForm from "../components/logout/LogoutForm";

function LoginPage() {
  {
    
     const [auth, setAuth] = useState(true);
    const [user, setUser] = useState({ email: "" });
    const [error, setError] = useState("");
    const [adminUser, setAdminUser] = useState([]);
    useEffect(() => {
      fetch(`https://localhost:3000/login`)
        .then((response) => response.json())
        .then((adminUser) => {
          setAdminUser(adminUser);
        });
    },[]);

    const Login = (details) => {
      if (
        details.email === adminUser.map(({ email})) &&
        details.password === adminUser.map(({ password}))
        ) {
        setAuth(true);
        setUser({ email: details.email });
      } else if (details.email ==="" && details.password === "") {
        setAuth(false);
        setError(" Xin vui lòng nhập đầy đủ Email và Password !");
      } else if (details.email === "") {
        setAuth(false);
        setError("Xin vui lòng nhập đầy đủ Email !");
      } else if (details.password === "") {
        setAuth(false);
        setError("Xin vui lòng nhập đầy đủ Password !");
      } else if (
        details.email !== adminUser.map(({ email})) &&
        details.password !== adminUser.map(({ password}))
      ) {
        setError("email không đúng . Xin vui lòng nhập lại !");
      } else if (
        details.email === adminUser.map(({ email})) &&
        details.email !== adminUser.map(({ password}))
      ) {
        setError("password không đúng . Xin vui lòng nhập lại !");
      } else if (
        details.email !== adminUser.map(({ email})) &&
        details.email === adminUser.map(({ password}))
      ) {
        setError("email không đúng . Xin vui lòng nhập lại !");
      }
    };

    const Logout = (e) => {
      setUser({ email: "" });
      setError("");
      e.preventDefault();
    };

    return (
      <div className="App">
        {user.email != "" ? (
        <></>
        ) : (
          <LoginForm auth={auth} Login={Login} error={error} />
        )}
      </div>
    );
  }
}

export default LoginPage;
