import { useState } from "react";
import "./App.css";
import LoginForm from "./components/login/LoginForm";

function App() {
  const adminUser = {
    name: "duy652000",
    password: "123123",
  };

  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.name == adminUser.name &&
      details.password == adminUser.password
    ) {
      setUser({ name: details.name });
    }  else if (
      details.name == "" &&
      details.password == ""
    ) {
      setError(" Xin vui lòng nhập đầy đủ Email và Password !");
    }
    else if (
      details.name == "" 
    ) {
      setError("Xin vui lòng nhập đầy đủ Email !");
    }
    else if (
      details.password == "" 
    ) {
      setError("Xin vui lòng nhập đầy đủ Password !");
    }
    else if (
      details.name != adminUser.name &&
      details.password != adminUser.password
    ) {
      setError("Email không đúng . Xin vui lòng nhập lại !");
    }else if (
      details.name == adminUser.name &&
      details.password != adminUser.password
    ) {
      setError("password không đúng . Xin vui lòng nhập lại !");
    } else if (
      details.name != adminUser.name &&
      details.password == adminUser.password
    ) {
      setError("email không đúng . Xin vui lòng nhập lại !");
    
    } 
  };

  const Logout = (e) => {
    setUser({ name: "" });
    setError("");
    e.preventDefault();
  };

  return (
    <div className="App">
      {user.name != "" ? (
        <div className="wellcome">
          <h2>
            Wellcome ,<span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
