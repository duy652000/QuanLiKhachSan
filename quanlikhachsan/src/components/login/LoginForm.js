import React, { useState } from "react";
import { Link } from "react-router-dom";

import  './LoginForm.css';
function LoginForm({ auth,Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [disable,setDisable] =useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(details)
    if(auth)setDisable(true)
    else{
      setDisable(false)
    }
    
    
  };
 

  return (

  
    <form onSubmit={handleSubmit}>
      <div className="form-inner">
        <h2>Login</h2>
        {error != "" ? <div className="error-login">{error}</div> : ""}
        <br></br>
        <div className="form-group">
          <label htmlFor="name">Email </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
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
      {auth?
      <Link to='/'>
        <button type="submit">Đăng Nhập</button>
      </Link> :
     ( <button type="submit">Đăng Nhập</button>)}
      </div>
    </form>
   
  );
}

export default LoginForm;
