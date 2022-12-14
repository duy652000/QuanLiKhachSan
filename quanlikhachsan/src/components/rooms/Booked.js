import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import { memo } from "react";
import ProfileBill from "../handleroom/ProfileBill";
import { useCallback } from "react";
import { useMemo } from "react";

function Booked({ dataSortBooked }) {
  const token = useMemo(() => JSON.parse(localStorage.getItem("token")), []);

  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
    }, 0);
  }, []);

  let dataSort = dataSortBooked;


  //////////////////// get data
  const [loadingData, setLoadingData] = useState(false);
  const [dataProfileForm, setDataProfileForm] = useState([]);

  //xủ lý data
  const data = dataSort.flat();
  
  /////////////////

  //checkin phòng theo id
  const handlePay = useCallback(
    async (id) => {
      let res = await axios.post(
        `http://localhost:8000/bill/checkin?room_id=${id}`,
        "",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location = "/room/checkin";
    },
    [token]
  );

  //lấy dữ liệu bill theo id phòng
  const getData = useCallback(
    async (id) => {
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
      setDataProfileForm(res);
    },
    [token]
  );

  //

  ////////////////////

  return (
    <div className="card-body white">
      <h6 className="m-0 font-weight-bold text-primary">Đã đặt</h6>
      <hr />
      <section className="py-2">
        <div className="container px-2 px-lg-2 mt-0">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 justify-content-center">
            {/* product */}

            {data.length === 0 || data[0].id === null ? (
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
                    <p className="  hight-load load-spinner text-dark ">
                      Không có dữ liệu <br /> Vui lòng chọn ngày
                    </p>
                  </div>
                )}
              </>
            ) : (
              data.length > 0 &&
              data.map((item) => (
                <div className="col mb-2 border-dark" key={item.id}>
                  <div className="card bg-warning decription-room border border-dark">
                    {/* <!-- Product details--> */}
                    <div className="card-body">
                      {/* icon */}
                      <div className="d-flex justify-content-center">
                        {/* <a className="text-light bg-dark pl-1 pr-1 rounded ">
                          <i className="bi bi-arrow-repeat"></i>
                        </a> */}

                        <a
                          className="text-light bg-dark pl-1 pr-1 rounded ml-1 "
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
                        <ProfileBill idDataRoom={dataProfileForm} />
                      </div>
                      {/* icon */}

                      <div className="text-center mt-2 ">
                        {/* <!-- Product name--> */}
                        <strong className="fw-bolder">{item.name_room}</strong>

                        {/* <!-- Product price--> */}
                        <p className="fw-bolder">
                          {item.typ_room}
                          {/* {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.price ?? 0)} */}
                        </p>
                      </div>
                    </div>

                    {/* <!-- Product actions--> */}
                    <div className="card-footer p-2 mb-2 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a
                          className="btn btn-outline-dark bg-dark text-light bg-dark pl-1 pr-1 rounded ml-1"
                          type="button"
                          onClick={function confirmCheckIn() {
                            const id = item.id;
                            let text = "Bạn có muốn Check In ?";
                            if (window.confirm(text) == true) {
                              text = "You pressed OK!";

                              handlePay(id);
                            } else {
                              text = "You canceled!";
                            }
                          }}
                        >
                          Checkin
                        </a>

                        {/* <a
                          className="btn btn-outline-dark bg-dark text-light bg-dark pl-1 pr-1 rounded ml-1 "
                          type="button"
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
                          Hủy
                        </a> */}
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
export default memo(Booked);
