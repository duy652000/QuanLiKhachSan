import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import React from "react";
 

function userName(){

  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  let username = decoded[0];
  return username;

}

  

function UserName() {
  return (
    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
     {/* {username?username.toUpperCase():""} */}
     {userName()}
    </span>
  );
}

export default UserName;
