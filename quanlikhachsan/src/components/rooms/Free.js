import React, { useContext, useState, useEffect, CSSProperties } from "react";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../Context/AppContext";
import OderRoomForm from "../handleroom/OderRoomForm";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";



function Free() {
  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
    }, 500000);
  }, []);


 const {dataAllRoom} = useContext(AppContext)
 const [loadingData, setLoadingData] = useState(false);

  //get data
  const dataOfFreeRoom = dataAllRoom.filter(function(FreeRoom){
    return FreeRoom.status === 1
    })

  const data = dataOfFreeRoom


  const className = (status) => {
    if (status === 1) {
      return "card bg-primary decription-room";
    } else if (status === 2) {
      return "card bg-warning decription-room";
    } else if (status === 3) {
      return "card bg-danger decription-room";
    }
  };

  ////////////////////

  return (
    <div className="card-body white">
      <h6 className="m-0 font-weight-bold text-primary">Trống</h6>
      <hr />
      <section className="py-2">
        <div className="container px-2 px-lg-2 mt-0">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* product */}
            {data.length==0 ? (
              <PulseLoader
                className="justify-content-center hight-load load-spinner mt-4"
                color="#007bff"
                loading={loadingData}
                data-testid="loader"
                size={12}
                speedMultiplier={1}
              />
             
            ) : (data.length>0 && data.map((item) => (
              <div className="col mb-2 " key={item.id}>
                <div className={className(item.status)}>
                  {/* <!-- Product details--> */}
                  <div className="card-body p-2">
                    {/* icon */}
                    <div className="d-flex justify-content-center"></div>
                    {/* icon */}

                    <div className="text-center ">
                      {/* <!-- Product name--> */}
                      {/* <h5 className="fw-bolder">Thường | 301</h5> */}
                      <h4 className="fw-bolder">{item.name_room}</h4>

                      {/* <!-- Product price--> */}
                      <h6 className="fw-bolder">Giá : {item.price + " vnd"}</h6>
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
                        variant="primary"
                        type="button"
                        className="btn btn-outline-dark mt-2 mr-2 mb-2 white bg-dark white "
                        data-toggle="modal"
                        data-target="#OderRoomModal"
                        data-whatever="@getbootstrap"
                      >
                        Đặt phòng
                      </Button>     
                      {/* <OderRoomForm dataItem={item}  variant="primary"
                        type="button"
                        className="btn btn-outline-dark mt-2 mr-2 mb-2 white bg-dark white "> Đặt phòng </OderRoomForm> */}
                    
                      {/* modal oder room form */}
                      <OderRoomForm dataItem={item}/>
                      {/* modal oder room form */}
                     

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
            )))}
            {/* product */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Free;
