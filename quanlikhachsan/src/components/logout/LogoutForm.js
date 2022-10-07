import React from "react";
import { Link } from "react-router-dom";

function LogoutForm({ logOut, data }) {
  return (
    <div className="wellcome">
      <h2>
        Wellcome ,<span>{data}</span>
      </h2>
      <Link to="/login">
        <button onClick={logOut}>Logout</button>
      </Link>
    </div>
  );
}

export default LogoutForm;
