import React, { useState } from "react";
import LoginForm from "../../src/components/login/LoginForm";

function LoginPage() {
  {
    const adminUser = {
      email: "vokhanhduy2000@gmail.com",
      password: "123123",
    };

    const [user, setUser] = useState({ email: "" });
    const [error, setError] = useState("");

    const Login = (details) => {
      if (
        details.email == adminUser.email &&
        details.password == adminUser.password
      ) {
        setUser({ email: details.email });
      } else if (details.email == "" && details.password == "") {
        setError(" Xin vui lòng nhập đầy đủ Email và Password !");
      } else if (details.email == "") {
        setError("Xin vui lòng nhập đầy đủ Email !");
      } else if (details.password == "") {
        setError("Xin vui lòng nhập đầy đủ Password !");
      } else if (
        details.email != adminUser.email &&
        details.password != adminUser.password
      ) {
        setError("email không đúng . Xin vui lòng nhập lại !");
      } else if (
        details.email == adminUser.email &&
        details.password != adminUser.password
      ) {
        setError("password không đúng . Xin vui lòng nhập lại !");
      } else if (
        details.email != adminUser.email &&
        details.password == adminUser.password
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
          <div className="wellcome">
            <h2>
              Wellcome ,<span>{user.email}</span>
            </h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    );
  }
}

export default LoginPage;
