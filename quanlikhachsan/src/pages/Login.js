import React, { useEffect, useState } from "react";
import { MDBContainer, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Login() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("*");
    }
  },[]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  


 


  async function handleLogin() {
    
    
    
    let item = { email,password };
    // console.log(email, password);

    let result = await fetch(`http://127.0.0.1:3000/login`, {
      method: "POST",
      mode: 'no-cors',

      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
    });

    result = await result.json();
    localStorage.setItem("token", JSON.stringify(result));

    history.push("/");
  
  }

  
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBInput
        wrapperClass="mb-4"
        placeholder="Email address"
        id="form1"
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <MDBInput
        wrapperClass="mb-4"
        placeholder="Password"
        id="form2"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Remember me"
        />
        <a href="#">Forgot password?</a>
      </div>

      <button onClick={handleLogin} className="mb-4 btn btn-primary">
        Sign in
      </button>

      <div className="text-center">
        <div
          className="d-flex justify-content-between mx-auto"
          style={{ width: "40%" }}
        ></div>
      </div>
    </MDBContainer>
  );
}

export default Login;
