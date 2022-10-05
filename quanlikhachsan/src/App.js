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
    } else {
      setError("Sai thông tin đăng nhập , vui lòng đăng nhập lại !");
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
