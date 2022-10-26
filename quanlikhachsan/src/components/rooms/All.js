import React from "react";
import GetRoom from "../handleroom/GetRoom"

function All() {
  return (
    <div className="card-body white">
      <h6 className="m-0 font-weight-bold text-primary">All</h6>
      <hr />
      <section className="py-2">
        <div className="container px-2 px-lg-2 mt-0">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* product */}
            <div className="col mb-2 ">
              <div className="card  bg-primary decription-room ">
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                  {/* icon */}
                  <div className="d-flex justify-content-center">
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill bg-dark white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </a>
                    &nbsp; &nbsp;
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-car-front-fill bg-dark white"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189l.956-1.913A.5.5 0 0 1 4.309 3h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731Z"
                        />
                      </svg>
                    </a>
                    &nbsp; &nbsp;
                    <a href="">
                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-repeat bg-dark white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                        <path
                          fillRule="evenodd"
                          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                        />
                      </svg>
                    </a>
                    &nbsp; &nbsp;
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-calendar2-date bg-danger white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.445 12.688V7.354h-.633A12.6 12.6 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                      </svg>
                    </a>
                  </div>

                  {/* icon */}

                  <div className="text-center ">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Thường | 301</h5>
                    {/* <!-- Product price--> */}
                    17/10/2022
                    <br />
                    19/10/2022
                  </div>
                </div>

                {/* <!-- Product actions--> */}
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                   
                      <GetRoom/>
                    
                    <a
                      className="btn btn-outline-dark mt-2 mb-2 white  bg-dark white"
                      href="#"
                    >
                      Check in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product */}

            {/* product */}
            <div className="col mb-5">
              <div className="card bg-primary">
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Cao cấp | 301</h5>
                    {/* <!-- Product price--> */}
                    17/10/2022
                    <br />
                    19/10/2022
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-2 mr-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Đặt Chỗ
                    </a>
                    <a
                      className="btn btn-outline-dark mt-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Check in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product */}

            {/* product */}
            <div className="col mb-5">
              <div className="card bg-danger">
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Thường | 301</h5>
                    {/* <!-- Product price--> */}
                    17/10/2022
                    <br />
                    19/10/2022
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-2 mr-2 mb-2 white bg-dark"
                      href="#"
                    >
                      Đặt Chỗ
                    </a>
                    <a
                      className="btn btn-outline-dark mt-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Check in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product */}

            {/* product */}
            <div className="col mb-5">
              <div className="card bg-warning">
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Thường | 301</h5>
                    {/* <!-- Product price--> */}
                    17/10/2022
                    <br />
                    19/10/2022
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-2 mr-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Đặt Chỗ
                    </a>
                    <a
                      className="btn btn-outline-dark mt-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Check in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product */}

            {/* product */}
            <div className="col mb-5">
              <div className="card bg-primary">
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Thường | 301</h5>
                    {/* <!-- Product price--> */}
                    17/10/2022
                    <br />
                    19/10/2022
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-2 mr-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Đặt Chỗ
                    </a>
                    <a
                      className="btn btn-outline-dark mt-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Check in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product */}

            {/* product */}
            <div className="col mb-5 ">
              <div className="card bg-primary">
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Thường | 301</h5>
                    {/* <!-- Product price--> */}
                    17/10/2022
                    <br />
                    19/10/2022
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-2 mr-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Đặt Chỗ
                    </a>
                    <a
                      className="btn btn-outline-dark mt-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Check in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product */}

            {/* product */}
            <div className="col mb-5">
              <div className="card bg-primary">
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Thương Gia | 301</h5>
                    {/* <!-- Product price--> */}
                    17/10/2022
                    <br />
                    19/10/2022
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-2 mr-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Đặt Chỗ
                    </a>
                    <a
                      className="btn btn-outline-dark mt-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Check in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product */}

            {/* product */}
            <div className="col mb-5">
              <div className="card bg-primary">
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Cao cấp | 301</h5>
                    {/* <!-- Product price--> */}
                    17/10/2022
                    <br />
                    19/10/2022
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-2 mr-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Đặt Chỗ
                    </a>
                    <a
                      className="btn btn-outline-dark mt-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Check in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product */}

            {/* product */}
            <div className="col mb-5">
              <div className="card bg-primary">
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Cao cấp | 301</h5>
                    {/* <!-- Product price--> */}
                    17/10/2022
                    <br />
                    19/10/2022
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-2 mr-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Đặt Chỗ
                    </a>
                    <a
                      className="btn btn-outline-dark mt-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Check in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product */}

            {/* product */}
            <div className="col mb-5">
              <div className="card bg-primary">
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Cao cấp | 301</h5>
                    {/* <!-- Product price--> */}
                    17/10/2022
                    <br />
                    19/10/2022
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-2 mr-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Đặt Chỗ
                    </a>
                    <a
                      className="btn btn-outline-dark mt-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Check in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product */}

            {/* product */}
            <div className="col mb-5">
              <div className="card bg-primary">
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Cao cấp | 301</h5>
                    {/* <!-- Product price--> */}
                    17/10/2022
                    <br />
                    19/10/2022
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-2 mr-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Đặt Chỗ
                    </a>
                    <a
                      className="btn btn-outline-dark mt-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Check in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product */}

            {/* product */}
            <div className="col mb-5">
              <div className="card bg-primary">
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Cao cấp | 301</h5>
                    {/* <!-- Product price--> */}
                    17/10/2022
                    <br />
                    19/10/2022
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-2 mr-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Đặt Chỗ
                    </a>
                    <a
                      className="btn btn-outline-dark mt-2 mb-2 white  bg-dark"
                      href="#"
                    >
                      Check in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default All;
