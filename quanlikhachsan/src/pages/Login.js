import React, { useEffect, useState } from "react";

import { MDBContainer, MDBInput } from "mdb-react-ui-kit";

import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const history = useNavigate();

<<<<<<< HEAD

  //check token
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history("*");
    }
  });
=======
//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       history("*");
//     }
// });
>>>>>>> parent of 8094664 (v9)

  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  // const [dataLogin, setDataLogin] = useState("");

<<<<<<< HEAD
  // xử li submit
=======

>>>>>>> parent of 8094664 (v9)
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

      res = await res.data.access_token;
      // let data = res.user;
      let token = res.access_token;
      localStorage.setItem("token", JSON.stringify(token));
<<<<<<< HEAD
      
      history("/");
=======

>>>>>>> parent of 8094664 (v9)
    } catch (error) {
    
      setErrorPass(((error.response.data.password)));
      setErrorEmail(((error.response.data.email)));
      setError(error.response.data.error);
     
    }
  }
 
 

  return (
    <form onSubmit={handleLogin} >
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <div className="form-group">
          <p>{error}</p>
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
          <p>{errorEmail}</p>
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
          <p>{errorPass}</p>
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

export default Login();
