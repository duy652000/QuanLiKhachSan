import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import ClipLoader from "react-spinners/ClipLoader";
import { AppContext } from "../../Context/AppContext";

function ShowService({dataRoomSearch}) {
  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
    }, 1000);
  }, []);

  const { roomData } = useContext(AppContext);
  const data =
  dataRoomSearch[0].length == 0 && dataRoomSearch[1] == true
    ? []
    : dataRoomSearch[0].length == 0 && dataRoomSearch[1] == false
    ? roomData
    : dataRoomSearch[0];

  const token = JSON.parse(localStorage.getItem("token"));
  const [loadingData, setLoadingData] = useState(false);

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          <Link to="add" type="button" className="btn btn-success">
            {" "}
            Thêm Phòng
          </Link>
        </h6>
      </div>
      <div className="card-body high-load-service">
        <div className="table-responsive">
          <table
            id="example"
            className="table table-striped"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Tên Phòng</th>
                <th>Kiểu Phòng</th>
                <th>Giá</th>
                <th>Sức Chứa </th>
                <th>Trạng thái</th>
                <th>Mô tả </th>
                <th>Ngày tạo </th>
                <th>Ngày cập nhật </th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {/*  */}
              {data.length === 0 ? (
               <>
               {loadingData ? (
                 <tr>
                   <td>
                     <ClipLoader
                       id="servicee"
                       className=" load-spinner-table-service "
                       color="#b5b6b7  "
                       loading={loadingData}
                       data-testid="loader"
                       size={35}
                       speedMultiplier={1}
                     />
                   </td>
                 </tr>
               ) : (
                 <tr>
                   <td>
                     <p></p>
                   </td>
                   <td>
                     <p></p>
                   </td>
                   <td>
                     <p></p>
                   </td>
                   <td>
                     <p></p>
                   </td>
                   <td>
                     <p>Không có dữ liệu</p>
                   </td>
                   <td>
                     <p></p>
                   </td>
                   <td>
                     <p></p>
                   </td>
                   <td>
                     <p></p>
                   </td>
                 </tr>
               )}
             </>
              ) : (
                data.length > 0 &&
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name_room}</td>
                    <td>{item.typ_room}</td>

                    <td>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.price ?? 0)}
                    </td>
                    <td>{item.capacity}</td>
                    <td
                      className={
                        item.status === 2
                          ? "text-success"
                          : item.status === 3
                          ? "text-danger"
                          : item.status === 1
                          ? "text-primary"
                          : ""
                      }
                    >
                      {item.status == 3
                        ? "Dọn dẹp"
                        : item.status == 2
                        ? "Đang ở"
                        : item.status == 1
                        ? "Trống"
                        : "Ẩn"}
                    </td>
                    <td>{item.description}</td>
                    <td>
                      <Moment format="DD/MM/YYYY">{item.created_at}</Moment>
                    </td>
                    <td>
                      <Moment format="DD/MM/YYYY">{item.updated_at}</Moment>
                    </td>
                    <td>
                      <div className="d-flex black">
                        {/* ẩn */}
                        {item.status === 3 || item.status === 2 ? (
                          ""
                        ) : (
                          <>
                            <a
                              type="button"
                              onClick={async function Hiden() {
                                try {
                                  let res = await axios.get(
                                    `http://localhost:8000/room/hiden/id=${item.id}`,

                                    {
                                      headers: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${token}`,
                                      },
                                    }
                                  );
                                  res = await res;
                                  window.location = "/room-manager";
                                  alert("Thay đổi trạng thái thành công !");
                                } catch (error) {
                                  alert(
                                    "Thay đổi trạng thái không thành công !"
                                  );
                                }
                              }}
                            >
                              {item.status === 1 ? (
                                <i className="bi bi-eye-slash hover-text black hover-text">
                                  {" "}
                                </i>
                              ) : (
                                <i className="bi bi-eye hover-text black hover-text"></i>
                              )}
                            </a>
                            &nbsp; &nbsp;
                            {/* chỉnh sửa */}
                            <Link type="button" to={`update/${item.id}`}>
                              <i className="bi bi-pencil hover-text black hover-text"></i>
                            </Link>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowService;
