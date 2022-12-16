import moment from "moment";
import React from "react";

function Footer() {
  // let today = new Date().toLocaleDateString()
  
  return (
    //   {/* <!-- Footer --> */}
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span> Hotel Manager {new Date().getFullYear()}</span>

          {/* <span> date now {today}</span> */}

        </div>
      </div>
    </footer>
    //   {/* <!-- End of Footer --> */}
  );
}

export default Footer;
