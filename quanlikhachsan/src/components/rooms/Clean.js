import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  memo,
  useMemo,
} from "react";
import { AppContext } from "../../Context/AppContext";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";

function Clean() {
  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
    }, 2000);
  }, []);

  //lấy dữ liệu từ clean room từ Appcontext
  const { dataCleanRoom } = useContext(AppContext);
  const [loadingData, setLoadingData] = useState(false);
  const data = dataCleanRoom;
  const token = useMemo(() => JSON.parse(localStorage.getItem("token")), []);

  //hàm dọn dẹp phòng
  const cleanRoom = useCallback(
    async (id) => {
      let res = await axios.get(
        `http://localhost:8000/room/clearroom/id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location = "/room";
      alert("Dọn dẹp thành công !");
    },
    [token]
  );

  ////////////////////

  return (
    <div className="card-body white">
      <h6 className="m-0 font-weight-bold text-primary">Dọn dẹp</h6>
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
                  <div className="card bg-danger decription-room border border-dark">
                    {/* <!-- Product details--> */}
                    <div className="card-body p-2">
                      {/* icon */}
                      <div className="d-flex justify-content-center"></div>
                      {/* icon */}

                      <div className="text-center ">
                        {/* <!-- Product name--> */}
                        {/* <h5 className="fw-bolder">Thường | 301</h5> */}
                        <strong className="fw-bolder">{item.name_room}</strong>

                        {/* <!-- Product price--> */}
                        <p className="fw-bolder">
                          {item.typ_room}
                          {/* {(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((item.price)??0)) } */}
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
                        <a
                          className="btn btn-outline-dark mt-2 mb-2 white  bg-dark white"
                          type="button"
                          onClick={function handleClean(e) {
                            e.preventDefault();
                            cleanRoom(item?.id);
                          }}
                        >
                          clean
                        </a>
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
export default memo(Clean);
