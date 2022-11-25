import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function userName() {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    let username = decoded[0];
    return username;
  }
  return "";
}

function UserName() {
  // const token = JSON.parse(localStorage.getItem("token"));
  // const history = useNavigate();

  // //get infor
  // const getData = async () => {
  //   //await here
  //   try {
  //     let res = await axios.get("http://localhost:8000/view-account", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     res = await res.data;
  
  //   } catch (error) {
  //     localStorage.clear("token");
  //     history("/login");
  //     alert("Hết phiên đăng nhập !");
  //   }
  // };
  // //call get inf
  // useEffect(() => {
  //   getData();
  // }, [token]);
  // //////
  return (
    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
      {/* {username?username.toUpperCase():""} */}
      {userName().toUpperCase()}
    </span>
  );
}

export default UserName;
