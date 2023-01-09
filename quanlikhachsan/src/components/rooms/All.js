import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import PulseLoader from "react-spinners/PulseLoader";
import { memo } from "react";

function All() {
  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
      return;
    }, 5000);
  }, []);
  
  ////////////////////
  //lấy data room từ App context
  const { roomData } = useContext(AppContext);
  const [loadingData, setLoadingData] = useState(false);
  const data = roomData
  ////////////////////

  return (
    <div className="card-body white">
      <h6 className="m-0 font-weight-bold text-primary">Danh sách phòng</h6>
      <hr />
      <section className="py-2">
        <div className="container ">
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
                <div className="col mb-2  " key={item.id}>
                  <div className="card bg-secondary decription-room border border-dark">
                    {/* <!-- Product details--> */}
                    <div className="card-body p-2">
                      {/* icon */}
                      {/* <div className="d-flex justify-content-center">
                        <a className="text-light bg-dark pl-1 pr-1 rounded " type="button">
                        <i className="bi bi-arrow-repeat"></i>
                        </a>
                        <a className="text-light bg-dark pl-1 pr-1 rounded ml-1 " type="button">
                        <i className="bi bi-people-fill"></i>
                        </a>
                        </div> */}
                      {/* icon */}

                      <div className="text-center pt-2">
                        {/* <!-- room name--> */}
                        {/* <h5 className="fw-bolder">Thường | 301</h5> */}
                        <strong className="fw-bolder">{item.name_room}</strong>

                        {/* <!-- room price--> */}
                        <div >
                          Giá: {(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((item.price)??0)) }
                        </div>
                      
                         {/* <!-- room type--> */}
                         <div >
                          {(item?.typ_room) }
                        </div>
                       
                     
                         {/* <!-- room capacity--> */}
                         <div>
                          Chứa: {(item?.capacity) }
                        </div>
                          {/* <!-- room status--> */}
                          <div >Trạng Thái :
                          {(item?.status)==0?"Ẩn":" Hiện" }
                        </div>
                      
                        
                      </div>
                    </div>

                    <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                     
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
export default memo(All);
