import axios from "axios";
import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

function OverLoad({ children }) {
  const token = useMemo(() => JSON.parse(localStorage.getItem("token")), []);
  
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setModal(true);
    function x() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('done!');
        },3000);
      });
   }

    Promise.all([x()]).then((res) => {
      console.log(res);
      setModal(false);
    });
  }, []);

  return (
    <>{modal ? <div className="w-100 h-100 bg-danger">123</div> : children}</>
  );
}

export default OverLoad;
