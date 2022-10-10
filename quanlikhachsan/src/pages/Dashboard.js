import React, { useEffect } from "react";
import Header from "../layouts/Header";
import { BrowserRouter, Route, Routes , useNavigate} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Rooms from "../components/rooms/Rooms";
import Staffs from "../components/staffs/Staffs";

function Dashboard() {
  let history = useNavigate();
  useEffect(() =>{
    if(localStorage.getItem("token")){
      history("/login")
    }
  })
  return (
    
      <div className="Dashboard">
        <Header />
        
        

        <h1>Dashboard</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/staffs" element={<Staffs />} />
        </Routes>
      </div>
   
  );
}

export default Dashboard;
