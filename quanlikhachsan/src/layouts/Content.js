import React from "react";
import $ from "jquery";
import { memo } from "react";

function Content() {
  /// jquery time zone
  window.onload = function () {
    // var getUSATime = function () {
    //   var timeUSA = new Date().toLocaleString("en-US", {
    //     timeZone: "America/New_York",
    //     timeStyle: "medium",
    //     hourCycle: "h23",
    //   });
    //   document.getElementById("USATime").innerHTML =timeUSA.substring(0,5)
    // };
    // getUSATime();
    // const myInterval = setInterval(getUSATime, 60000);
    //clearInterval(myInterval);

    var getUSATime = function () {

      
      document.getElementById("USATime").innerHTML = new Date().toLocaleString(
        "en-US",
        { timeZone: "America/New_York", timeStyle: "medium", hourCycle: "h23" }
      );
    };
    // getUSATime();
    // setInterval(getUSATime, 1000);
    getUSATime();
    const myInterval = setInterval(getUSATime, 1000);
   

    var getVNTime = function () {
      document.getElementById("VNTime").innerHTML = new Date().toLocaleString(
        "en-US",
        { timeZone: "Asia/Ho_Chi_Minh", timeStyle: "medium", hourCycle: "h23" }
      );
    };

    getVNTime();
    setInterval(getVNTime, 1000);

    var getJPTime = function () {
      document.getElementById("JPTime").innerHTML = new Date().toLocaleString(
        "en-US",
        { timeZone: "Asia/Tokyo", timeStyle: "medium", hourCycle: "h23" }
      );
    };

    getJPTime();
    setInterval(getJPTime, 1000);

    var getUSUKTime = function () {
      document.getElementById("USUKTime").innerHTML = new Date().toLocaleString(
        "en-US",
        { timeZone: "Europe/London", timeStyle: "medium", hourCycle: "h23" }
      );
    };
    getUSUKTime();
    setInterval(getUSUKTime, 1000);
    // clearInterval(myInterval);
  };
   

  ///
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">
        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2 bg-light">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Hà Nội
                  </div>
                  <div
                    id="VNTime"
                    className="h5 mb-0 font-weight-bold text-gray-800"
                  ></div>
                </div>
                <div className="col-auto">
                  <i className=" fa-2x text-gray-300">
                    <span className="fi fi-vn"></span>{" "}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2 bg-light">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 text-xs font-weight-bold text-primary text-uppercase mb-1">
                    New York
                  </div>
                  <div
                    id="USATime"
                    className="h5 mb-0 font-weight-bold text-gray-800"
                  ></div>
                </div>
                <div className="col-auto">
                  <i className=" fa-2x text-gray-300">
                    <span className="fi fi-us"></span>{" "}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2 bg-light">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Nhật Bản
                  </div>
                  <div
                    id="JPTime"
                    className="h5 mb-0 font-weight-bold text-gray-800"
                  ></div>
                </div>
                <div className="col-auto">
                  <i className=" fa-2x text-gray-300">
                    <span className="fi fi-jp"></span>{" "}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Pending Requests Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4 ">
          <div className="card border-left-warning shadow h-100 py-2 bg-light">
            <div className="card-body ">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 text-xs font-weight-bold text-primary text-uppercase mb-1">
                    London
                  </div>
                  <div
                    id="USUKTime"
                    className="h5 mb-0 font-weight-bold text-gray-800"
                  ></div>
                </div>
                <div className="col-auto">
                  <i className=" fa-2x text-gray-300 ">
                    <span className="fi fi-gb"></span>{" "}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Content Row --> */}

      <div className="row">
        {/* <!-- Content Row --> */}
        <div className="row">
          {/* <!-- Content Column --> */}
          <div className="col-lg-6 mb-4">
            {/* <!-- Project Card Example --> */}

            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
              </div>
              <div className="card-body">
                <h4 className="small font-weight-bold">
                  Server Migration <span className="float-right">20%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{
                      width: "20%",
                      ariaValuenow: "20",
                      ariaValuemin: "0",
                      ariaValuemax: "100",
                    }}
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Sales Tracking <span className="float-right">40%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{
                      width: "40%",
                      ariaValuenow: "40",
                      ariaValuemin: "0",
                      ariaValuemax: "100",
                    }}
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Customer Database <span className="float-right">60%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "60%",
                      ariaValuenow: "60",
                      ariaValuemin: "0",
                      ariaValuemax: "100",
                    }}
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Payout Details <span className="float-right">80%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{
                      width: "80%,",
                      ariaValuenow: "80",
                      ariaValuemin: "0",
                      ariaValuemax: "100",
                    }}
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Account Setup <span className="float-right">Complete!</span>
                </h4>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{
                      width: "100%",
                      ariaValuenow: "100",
                      ariaValuemin: "0",
                      ariaValuemax: "100",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* <!-- Color System --> */}
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card bg-primary text-white shadow">
                  <div className="card-body">
                    Primary
                    <div className="text-white-50 small">#4e73df</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-success text-white shadow">
                  <div className="card-body">
                    Success
                    <div className="text-white-50 small">#1cc88a</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                  <div className="card-body">
                    Info
                    <div className="text-white-50 small">#36b9cc</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-warning text-white shadow">
                  <div className="card-body">
                    Warning
                    <div className="text-white-50 small">#f6c23e</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-danger text-white shadow">
                  <div className="card-body">
                    Danger
                    <div className="text-white-50 small">#e74a3b</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-secondary text-white shadow">
                  <div className="card-body">
                    Secondary
                    <div className="text-white-50 small">#858796</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-light text-black shadow">
                  <div className="card-body">
                    Light
                    <div className="text-black-50 small">#f8f9fc</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    Dark
                    <div className="text-white-50 small">#5a5c69</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            {/* <!-- Illustrations --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Illustrations
                </h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: "25rem" }}
                    src="img/undraw_posting_photo.svg"
                    alt="..."
                  />
                </div>
                <p>
                  Add some quality, svg illustrations to your project courtesy
                  of{" "}
                  <a target="_blank" rel="nofollow" href="https://undraw.co/">
                    unDraw
                  </a>
                  , a constantly updated collection of beautiful svg images that
                  you can use completely free and without attribution!
                </p>
                <a target="_blank" rel="nofollow" href="https://undraw.co/">
                  Browse Illustrations on unDraw &rarr;
                </a>
              </div>
            </div>

            {/* <!-- Approach --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Development Approach
                </h6>
              </div>
              <div className="card-body">
                <p>
                  SB Admin 2 makes extensive use of Bootstrap 4 utility classes
                  in order to reduce CSS bloat and poor page performance. Custom
                  CSS classes are used to create custom components and custom
                  utility classes.
                </p>
                <p className="mb-0">
                  Before working with this theme, you should become familiar
                  with the Bootstrap framework, especially the utility classes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Content);
