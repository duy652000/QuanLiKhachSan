import React, { useContext, useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../Context/AppContext";
import OderRoomForm from "../handleroom/OderRoomForm";
import { useAsync } from "react-use";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios";

function All() {
  useEffect(()=>{
    setLoadingData(true)
    setTimeout(()=>{
      setLoadingData(false)
    },50000)
  },[])
  const { dataAllRoom } = useContext(AppContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const [idRoom, setIdRoom] = useState();
  const [nameRoom, setNameRoom] = useState();
  const [priceRoom, setPriceRoom] = useState();
  const [loadingData, setLoadingData] = useState(false);
 
 
  async function getDataRoomById(id) {



    let res = await axios.get(
      `http://localhost:8000/room/getlist?id=${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    res = await res.data.data[0];
    console.log("res", res.price);

    setIdRoom(res.id);
    setNameRoom(res.name_room);
    setPriceRoom(res.price);
  }

  const getDataAllRoom = useAsync(async () => {
    let res = await axios.get("http://localhost:8000/room/getlist", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      dataCount: res.data.total,
      getDataAllRoom: res.data.data,
    };
  }, [token]);

  const { loading, value } = getDataAllRoom;

  const data = value?.getDataAllRoom ?? [];
  // const data = [];



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
      <h6 className="m-0 font-weight-bold text-primary">All</h6>
      <hr />
      <section className="py-2 ">
        <div className="container px-2 px-lg-2 mt-0">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center high-load">
            {/* product */}
            {loading?
            <FadeLoader
            className="load-spinner ml-5  col-sm-2"
            color="#007bff"
            loading={loadingData}
            
          data-testid="loader"
            size={50}
            speedMultiplier={1}
           
              /> : data.length > 0 && data.map((item) => (
                <div className="col mb-2" key={item.id}>
                  <div className={className(item.status)}>
                    <div className="card-body p-2">
                      <div className="d-flex justify-content-center"></div>
                      <div className="text-center ">
                        <h4 className="fw-bolder">{item.name_room}</h4>
                        <h6 className="fw-bolder">
                          Giá : {item.price + " vnd"}
                        </h6>
                        <br />
                      </div>
                    </div>
                    <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <Button
                          onClick={function handleGetDataRoom(e) {
                            e.preventDefault();
                            console.log(item.id);
                            getDataRoomById(item.id);
                          }}
                          variant="primary"
                          type="button"
                          className="btn btn-outline-dark mt-2 mr-2 mb-2 white bg-dark white "
                          data-toggle="modal"
                          data-target="#OderRoomModal"
                          data-whatever="@getbootstrap"
                        >
                          Đặt phòng
                        </Button>
                        <OderRoomForm
                          dataItem={[idRoom, nameRoom, priceRoom]}
                        />

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
              ))}
            {/* product */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default All;
