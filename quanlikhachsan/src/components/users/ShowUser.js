import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import { AppContext } from "../../Context/AppContext";
import ClipLoader from "react-spinners/ClipLoader";
import ReactPaginate from "react-paginate";


function ShowUser({dataUserSearch}) {
  const token = JSON.parse(localStorage.getItem("token"));
  const history = useNavigate();
  const { userData } = useContext(AppContext);
  const data =
  dataUserSearch[0].length == 0 && dataUserSearch[1] == true
    ? []
    : dataUserSearch[0].length == 0 && dataUserSearch[1] == false
    ? userData
    : dataUserSearch[0];

      //// phân trang
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  ////
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
    }, 1000);
  }, []);


  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          <Link to="add" type="button" className="btn btn-success">
            {" "}
            Thêm tài khoản
          </Link>
        </h6>
      </div>
      <div className="card-body high-load-user">
        <div className="table-responsive">
          <table
            id="example"
            className="table table-striped"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>CCCD</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th>Ngày cập nhật</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {/*  */}
              {currentItems.length==0 ? (
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
                  <td>
                    <p></p>
                  </td>
                </tr>
              )}
            </>
             
            ) : (currentItems.length>0 && currentItems.map((item) => (
                <tr key={item.id}>
                  <td>NV{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>{item.CCCD}</td>
                  <td>{item.status == 1 ? "Hoạt động" : "ẩn"}</td>
                  <td>
                    <Moment format="DD/MM/YYYY">{item.created_at}</Moment>
                  </td>
                  <td>
                    <Moment format="DD/MM/YYYY">{item.updated_at}</Moment>
                  </td>
                  <td>
                    <div className="d-flex black">
                      {/* ẩn */}
                      <a
                        type="submit"
                        onClick={async function Hiden() {
                          try {
                            let res = await axios.post(
                              `http://localhost:8000/hiden/id=${item.id}`,
                              item.id,
                              {
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: `Bearer ${token}`,
                                },
                              }
                            );
                            window.location="/user";
                            alert("Thay đổi trạng thái thành công !");
                          } catch (error) {
                            alert("Thay đổi trạng thái không thành công !");
                          }
                        }}
                      >
                        {item.status == 1 ? (
                          <i className="bi bi-eye-slash hover-text black hover-text">
                            {" "}
                          </i>
                        ) : (
                          <i className="bi bi-eye hover-text black hover-text"></i>
                        )}
                      </a>
                      &nbsp;
                      {/* chỉnh sửa */}
                      <Link type="button" to={`update/${item.id}`}>
                        <i className="bi bi-pencil hover-text black hover-text"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              )))}

              {/*  */}
            </tbody>
          </table>


          <>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              pageCount={pageCount}
              previousLabel="< Previous"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeLinkClassName="active"
            />
          </>
        </div>
      </div>
    </div>
  );
}

export default ShowUser;
