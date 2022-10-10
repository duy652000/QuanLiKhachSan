import React, { useEffect, useState } from "react";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history("*");
    }
  });
  const [details, setDetails] = useState({ email: "", password: "" });
  const handleLogin = (e) => {
    e.preventDefault();
    Login(details);
    // console.log(details);
  };

  // async function Login(detail) {
  //   const res = await axios.post('http://localhost:8000/login',detail)
  //   console.log(res)
  // }
  async function Login(detail) {
    const formData = new FormData();
    formData.append("email", detail.email);
    formData.append("password", detail.password);

    let data = detail;
    //
    try {
      let result = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "/",
        },
        body: formData,
      });
      result = await result.json();
      console.log(result);
       // localStorage.setItem("token", JSON.stringify(result));

    // history("/");


    } catch (error) {
      console.warn(error);
    }


   
  }

  return (
    <form onSubmit={handleLogin}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <div className="form-group">
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Email address"
            id="email"
            name="email"
            type="email"
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <button type="submit" className="mb-4 btn btn-primary">
          Sign in
        </button>

        <div className="text-center">
          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "40%" }}
          ></div>
        </div>
      </MDBContainer>
    </form>
  );
}

export default Login;
