import React from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Content from "../layouts/Content";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";
import Room from "./Room";
import User from "./User";
import Oder from "./services/Oder";
import Service from "./services/Service";
import Customer from "./Customer";
import ShowProfile from "../components/profile/ShowProfile";
import ChangePassword from "../components/profile/ChangePassword";
import Bill from "./Bill";



function Local() {
 
  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
  });

  console.log()
  return (
   
    <>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Topbar />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}

            {/* <Content/> */}

            <Routes>
              <Route path="*" element={<Content />} />
              <Route path="/room/*" element={<Room />} />
              <Route path="/user/*" element={<User />} />
              <Route path="/oder/*" element={<Oder />} />
              <Route path="/customer/*" element={<Customer />} />
              <Route path="/service/*" element={<Service />} />
              <Route path="/bill/*" element={<Bill />} />
              <Route path="/profile" element={<ShowProfile />} />
              <Route path="/change_password" element={<ChangePassword />} />
              

            </Routes>

            {/* <Content/> */}

            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <Footer />
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      </>
     
  );
}

export default Local;
