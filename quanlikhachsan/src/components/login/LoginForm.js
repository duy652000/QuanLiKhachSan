import React, { useState } from "react";
import  './LoginForm.css';

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inner">
        <h2>Login</h2>
        {error != "" ? <div className="error-login">{error}</div> : ""}
        <br></br>
        <div className="form-group">
          <label htmlFor="name">Name </label>
          <input
            type="name"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <button type="submit">Đăng Nhập</button>
      </div>
    </form>
  );
}

export default LoginForm;
