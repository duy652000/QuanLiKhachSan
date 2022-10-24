import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history("/");
    }
  });

  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  // const [dataLogin, setDataLogin] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    Login(details);
  };
  //call api
  async function Login(detail) {
    try {
      let res = await axios.post("http://localhost:8000/login", detail, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer`,
        },
      });
      res = await res.data;
      let token = res.access_token;
      // console.log(res.access_token)
   

      localStorage.setItem("token", JSON.stringify(token));

      history("/");
    
      window.location.reload(true);
    
    } catch (error) {
      setErrorPass(error.response.data.password);
      setErrorEmail(error.response.data.email);
      setError(error.response.data.error);
    }
  }
  return (
    <div className="bg-gradient-primary">
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        <p>
                          {error}
                          {errorEmail}
                          <br />
                          {errorPass}
                        </p>
                      </div>
                      <form className="user" onSubmit={handleLogin}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            name="email"
                            onChange={(e) => {
                              setDetails({
                                ...details,
                                email: e.target.value,
                              });
                            }}
                            value={details.email}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            onChange={(e) =>
                              setDetails({
                                ...details,
                                password: e.target.value,
                              })
                            }
                            value={details.password}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
                        <hr />
                        <a
                          href="index.html"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw"></i> Login with
                          Google
                        </a>
                        <a
                          href="index.html"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw"></i> Login with
                          Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
