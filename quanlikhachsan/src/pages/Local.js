import React from "react";
import { useNavigate ,Route , Routes} from "react-router-dom";
import { useEffect } from "react";

import ButtonScrollToTop from "../components/scroll/ButtonScrollToTop";
import Content from "../layouts/Content";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";
import Room from "./Room";

function Local() {
  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
  });
  return (
    <body id="page-top">
      {/* // <!-- Page Wrapper --> */}
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
              <Route path="*" element={<Content/>}/>
              <Route path="/room" element={<Room/>} />
            </Routes>
            
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <Footer />
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
      <ButtonScrollToTop />
      {/* <!-- Scroll to Top Button--> */}
    </body>
  );
}

export default Local;
