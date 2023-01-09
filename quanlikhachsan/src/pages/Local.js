import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";
import Router from "../routes/Router";
import "jquery-ui-dist/jquery-ui";
import { useState } from "react";

function Local() {
  let history = useNavigate();
  const [openSideBar, setOpenSideBar] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
  }, []);

  return (
    <>
      <div id="wrapper">
        {/* <AppProvider> */}
        {/* <!-- Sidebar --> */}
        <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Topbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}

            {/* <Content/> */}

            <Router />

            {/* <Content/> */}

            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}


          {/* <!-- Footer --> */}
          <Footer />
          {/* <!-- End of Footer --> */}

        </div>
        {/* <!-- End of Content Wrapper --> */}
        
        {/* </AppProvider> */}
      </div>
    </>
  );
}

export default Local;
