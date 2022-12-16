import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import OderRoomForm from "../handleroom/OderRoomForm";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import { memo } from "react";

function Free({ dataSortFree }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const [idRoom, setIdRoom] = useState();
  const [nameRoom, setNameRoom] = useState();
  const [priceRoom, setPriceRoom] = useState();

  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
    }, 1000);
  }, []);

  const [loadingData, setLoadingData] = useState(false);

  let dataSort = dataSortFree;


  //get data

  const data = dataSort.flat();

  //get api by id
  async function getDataRoomById(id) {
    let res = await axios.get(
      `http://localhost:8000/room/getid/id=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    res = await res.data.data;
    setIdRoom(res?.id);
    setNameRoom(res?.name_room);
    setPriceRoom(res?.price);
  }
  //

  ////////////////////

  return (
    <div className="card-body white">
      <h6 className="m-0 font-weight-bold text-primary">Trống</h6>
      <hr />
      <section className="py-2">
        <div className="container px-2 px-lg-2 mt-0">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 justify-content-center">
            {/* product */}
            {(data.length == 0||data[0].id==null) ? (
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
                  <div className="justify-content-center flex-colums mt-2 pt-2">
                    
                    <p className="text-dark">
                    Không có dữ liệu 
                    </p>
                    <p className=" text-dark">
                  Vui lòng chọn ngày
                    </p>
                  </div>
                )}
              </>
            ) : (
              data.length > 0 &&
              data.map((item) => (
                <div className="col mb-2 " key={item?.id}>
                  <div className="card bg-primary decription-room border border-dark">
                    {/* <!-- Product details--> */}
                    <div className="card-body p-2">
                      {/* icon */}
                      <div className="d-flex justify-content-center"></div>
                      {/* icon */}

                      <div className="text-center pt-2">
                        {/* <!-- Product name--> */}
                        {/* <h5 className="fw-bolder">Thường | 301</h5> */}
                        <strong className="fw-bolder">{item?.name_room}</strong>

                        {/* <!-- Product price--> */}
                        <p className="fw-bolder">
                          Giá:{item?.price + "vnd"}
                        </p>
                        <br />
                        {/* day */}
                        {/* 17/10/2022
                    <br />
                    19/10/2022 */}
                      </div>
                    </div>

                    {/* <!-- Product actions--> */}
                    <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <Button
                          onClick={function handleGetDataRoom(e) {
                            e.preventDefault();
                            
                            getDataRoomById(item?.id);
                          }}
                          variant="primary"
                          type="button"
                          className="btn btn-outline-dark bg-dark text-light bg-dark pl-1 pr-1 rounded ml-1"
                          data-toggle="modal"
                          data-target="#OderRoomModal"
                          data-whatever="@getbootstrap"
                        >Đặt phòng</Button>
                        <OderRoomForm
                          dataItem={[idRoom, nameRoom, priceRoom]}
                        />
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

export default memo(Free);
