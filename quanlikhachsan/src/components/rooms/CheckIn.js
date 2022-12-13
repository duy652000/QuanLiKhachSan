import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import Button from "react-bootstrap/Button";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import PayRoomForm from "../handleroom/PayRoomForm";
import { useCallback } from "react";
import { memo } from "react";
import ProfileBill from "../handleroom/ProfileBill";
import ChangeRoom from "../handleroom/ChangeRoom";
import ServiceBill from "../handleroom/ServiceBill";

function CheckIn({ dataSortCheckIn }) {
  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
      return;
    }, 5000);
  }, []);
  
  let dataSort = dataSortCheckIn[0];
  let isNullCheckIn = dataSortCheckIn[1];

  //////////////////// get data
  const { dataCheckInRoom } = useContext(AppContext);
  const [loadingData, setLoadingData] = useState(false);
  const [dataPayForm, setDataPayForm] = useState([]);

  const dataOfCheckInRoom = dataCheckInRoom
  const data =
    dataSort.length == 0
      ? isNullCheckIn
        ? []
        : dataOfCheckInRoom
      : dataSort.flat();


  const token = JSON.parse(localStorage.getItem("token"));

  //get api by id
  const getData = useCallback(
    async (id) => {
      console.log(id)
      let res = await axios.get(
        `http://localhost:8000/bill/billroom/id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      res = await res.data.data;
      setDataPayForm(res);
    },
    [token]
  );

  //


  ////////////////////

  return (
    <div className="card-body white">
      <h6 className="m-0 font-weight-bold text-primary">Đang Ở</h6>
      <hr />
      <section className="py-2">
        <div className="container px-2 px-lg-2 mt-0">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 justify-content-center">
            {/* product */}

            {data.length == 0 ? (
              <>
                {loadingData ? (
                  <PulseLoader
                    className="justify-content-center hight-load load-spinner mt-4"
                    color="#007bff"
                    loading={loadingData}
                    data-testid="loader"
                    size={12}
                    speedMultiplier={1}
                  />
                ) : (
                  <div className="d-flex justify-content-center mt-2 pt-2">
                    <p className="  hight-load load-spinner text-dark">
                      Không có dữ liệu
                    </p>
                  </div>
                )}
              </>
            ) : (
              data.length > 0 &&
              data.map((item) => (
                <div className="col mb-2 border-dark" key={item.id}>
                  <div className="card bg-success decription-room border border-dark">
                    {/* <!-- Product details--> */}
                    <div className="card-body">
                       {/* icon */}
                       <div className="d-flex justify-content-center ">
                         <a className="text-light bg-dark pl-1 pr-1 rounded ml-1 "
                          variant="primary"
                          data-toggle="modal"
                          data-target="#ChangeRoomModal"
                          data-whatever="@getbootstrap"
                          type="button"
                          onClick={
                            // () => getData(item.id)
                              function handleGetDataRoom(e) {
                              e.preventDefault();
                              getData(item.id);
                            }
                          }
                        >
                        <i className="bi bi-arrow-repeat"></i>
                        </a>
                        


                        <a className="text-light bg-dark pl-1 pr-1 rounded ml-1 "
                          variant="primary"
                          data-toggle="modal"
                          data-target="#ProFileRoomModal"
                          data-whatever="@getbootstrap"
                          type="button"
                          onClick={
                            // () => getData(item.id)
                              function handleGetDataRoom(e) {
                              e.preventDefault();
                              getData(item.id);
                             
                            }
                          }
                        >
                          <i className="bi bi-people-fill"></i>
                        </a>

                        <ProfileBill idDataRoom={dataPayForm}/>
                        <ChangeRoom dataRoomChange={dataPayForm}/>
                        </div>
                      {/* icon */}

                      <div className="text-center mt-2">
                        {/* <!-- Product name--> */}
                        {/* <h5 className="fw-bolder">Thường | 301</h5> */}
                        <strong className="fw-bolder">{item.name_room}</strong>

                        {/* <!-- Product price--> */}
                        <p className="fw-bolder">Giá:{item.price+"vnd"}</p>
                   
                        {/* day */}
                        {/* 17/10/2022
                    <br />
                    19/10/2022 */}
                      </div>
                    </div>

                    <div className="card-footer p-2 mb-2 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                      <a
                          className="btn btn-outline-dark bg-dark text-light bg-dark pl-1 pr-1 rounded ml-1 "
                          type="button"
                          variant="primary"
                          data-toggle="modal"
                          data-target="#ServiceBillModal"
                          data-whatever="@getbootstrap"


                          onClick={
                            // () => getData(item.id)
                              function handleGetDataRoom(e) {
                              e.preventDefault();
                              getData(item.id);
                            }
                          }



                          // onClick={function confirmCancle() {
                          //   const id = item.id;
                          //   let text = "Bạn có muốn hủy phòng ?";
                          //   if (window.confirm(text) == true) {
                          //     text = "You pressed OK!";
                          //   } else {
                          //     text = "You canceled!";
                          //   }
                          // }}
                        >
                          Dv
                        </a>
                        <ServiceBill dataServiceRoom={dataPayForm} />

                        <Button
                          onClick={
                            // () => getData(item.id)
                              function handleGetDataRoom(e) {
                              e.preventDefault();
                              getData(item.id);
                            }
                          }
                          className="btn btn-outline-dark bg-dark text-light bg-dark pl-1 pr-1 rounded ml-1"
                          variant="primary"
                          type="button"
                          data-toggle="modal"
                          data-target="#OderRoomModal"
                          data-whatever="@getbootstrap"
                        >Checkout</Button>
                     
                        <PayRoomForm dataRoom={dataPayForm} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
            {/* product */}
          </div>
        </div>
      </section>
    </div>
  );
}
export default memo(CheckIn);
