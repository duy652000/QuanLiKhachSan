import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";
import { AppProvider } from "../Context/AppContext";
import Router from "../routes/Router";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { useState } from "react";


function Local() {
  let history = useNavigate();
  const [openSideBar,setOpenSideBar] = useState(false)
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
//     else{



      
// $(document).ready(function () {

//   "use strict";
//   $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
//     $("body").toggleClass("sidebar-toggled");
//     $(".sidebar").toggleClass("toggled");
//     if ($(".sidebar").hasClass("toggled")) {
//       $(".sidebar .collapse").collapse();
//     }
//   });
 
//   // Toggle the side navigation
//   // $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
//   //   $("body").toggleClass("sidebar-toggled");
//   //   $(".sidebar").toggleClass("toggled");
//   //   if ($(".sidebar").hasClass("toggled")) {
//   //     $(".sidebar .collapse").collapse("hide");
//   //   }
//   // });

//   // Close any open menu accordions when window is resized below 768px
//   $(window).resize(function () {
//     if ($(window).width() < 768) {
//       $(".sidebar .collapse").collapse("hide");
//     }

//     // Toggle the side navigation when window is resized below 480px
//     if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
//       $("body").addClass("sidebar-toggled");
//       $(".sidebar").addClass("toggled");
//       $(".sidebar .collapse").collapse("hide");
//     }
//   });

//   // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
//   $("body.fixed-nav .sidebar").on(
//     "mousewheel DOMMouseScroll wheel",
//     function (e) {
//       if ($(window).width() > 768) {
//         var e0 = e.originalEvent,
//           delta = e0.wheelDelta || -e0.detail;
//         this.scrollTop += (delta < 0 ? 1 : -1) * 30;
//         e.preventDefault();
//       }
//     }
//   );

//   // Scroll to top button appear
//   $(document).on("scroll", function () {
//     var scrollDistance = $(this).scrollTop();
//     if (scrollDistance > 100) {
//       $(".scroll-to-top").fadeIn();
//     } else {
//       $(".scroll-to-top").fadeOut();
//     }
//   });

//   // Smooth scrolling using jQuery easing
//   $(document).on("click", "a.scroll-to-top", function (e) {
//     var $anchor = $(this);
//     $("html, body")
//       .stop()
//       .animate(
//         {
//           scrollTop: $($anchor.attr("href")).offset().top,
//         },
//         1000,
//         "easeInOutExpo"
//       );
//     e.preventDefault();
//   });
// });

//     }
      

  },[]);
  

  return (
    <>
      <div id="wrapper">
      {/* <AppProvider> */}
        {/* <!-- Sidebar --> */}
        <Sidebar openSideBar={openSideBar}setOpenSideBar={setOpenSideBar}/>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Topbar openSideBar={openSideBar}setOpenSideBar={setOpenSideBar}/>
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
