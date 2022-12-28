import axios from "axios";
import React, { useContext } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../Context/AppContext";
import logo from "../assets/images/logoNavbar.png";
import { PulseLoader } from "react-spinners";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";


function OverLoad({ children }) {
  const token = useMemo(() => JSON.parse(localStorage.getItem("token")), []);
  const { role, setRole } = useContext(AppContext);

  let roleAccount = role == "" ? "" : role;

  const [modal, setModal] = useState(false);
  useEffect(() => {
    if (token) {
      setModal(true);
      const getProFile = () =>
        axios
          .get("http://localhost:8000/view-account", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setRole(res.data.group_id)
             return res.data
            });
         
      Promise.all([getProFile()]).then((res) => {
        console.log(res)
        setModal(false);
      });
    }
  }, []);

  return (
    <>{modal ? <div className="Over-Load">
        <div
        className="sidebar-brand  h-100 d-flex align-items-center justify-content-center "
      >
        <div className="sidebar-brand-icon rotate-n-15 bg-primary">
          <img src={logo} alt="Logo" className="logo-navbar" />
        </div>
        <div></div>
        <div className="sidebar-brand-text mx-2 font-weight-bold  mr-3">HOTEL MANAGER </div>
        
        <PulseLoader
                    className="justify-content-center hight-load load-spinner mt-2  "
                    color="#007bff"
                    loading={true}
                    data-testid="loader"
                    size={12}
                    speedMultiplier={1}
                  />
      </div>
    </div> : children}</>
  );
}

export default OverLoad;
