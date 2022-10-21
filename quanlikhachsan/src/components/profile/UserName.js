import jwtDecode from "jwt-decode";
import React from "react";


const token = localStorage.getItem("token");;
const decoded = jwtDecode(token)

let username = decoded[0];
console.log(username)







function UserName() {
  return (
    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
      {username}
    </span>
  );
}

export default UserName;
