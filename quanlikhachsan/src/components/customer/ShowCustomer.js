import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import ClipLoader from "react-spinners/ClipLoader";
import { AppContext } from "../../Context/AppContext";
import ReactPaginate from "react-paginate";

function ShowCustomer({ dataCustomerSearch }) {
  useEffect(() => {

    //loading
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
    }, 1000);
  }, []);

  //lấy dữ liệu từ context
  const { customerData } = useContext(AppContext);


  // check dữ liệu
  const data =
    dataCustomerSearch[0]?.length == 0 && dataCustomerSearch[1] == true
      ? []
      : dataCustomerSearch[0]?.length == 0 && dataCustomerSearch[1] == false
      ? customerData
      : dataCustomerSearch[0];

 //// phân trang
 const [itemOffset, setItemOffset] = useState(0);

 //số item trong 1 trang
 const itemsPerPage = 6; 

 const endOffset = itemOffset + itemsPerPage;
 //array của trang
 const currentItems = data?.slice(itemOffset, endOffset);
 //số trang có
 const pageCount = Math.ceil(data?.length / itemsPerPage);



 const handlePageClick = (event) => {
   const newOffset = (event.selected * itemsPerPage) % data.length;
   setItemOffset(newOffset);
 };

 ////


  const token = JSON.parse(localStorage.getItem("token"));
  const [loadingData, setLoadingData] = useState(false);

  return (
    <div className="card shadow mb-4 ">
      <div className="card-header py-3 d-flex justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">
          <Link to="add" type="button" className="btn btn-success">
            {" "}
            Thêm Khách Hàng
          </Link>
        </h6>
        <h6 className="m-0 font-weight-bold text-primary ">
          <Link to="/room" type="button" className="btn btn-danger">
            {" "}
            Trang Chủ
          </Link>
        </h6>
      </div>
      <div className="card-body high-load">
        <div className="table-responsive">
          <table
            id="example"
            className="table table-striped"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th width="8%">Id</th>
                <th>Họ và tên lót</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Số điện thoại </th>
                <th>Trạng thái</th>
                <th>CCCD</th>
                <th>Ngày tạo</th>
                <th>Ngày cập nhật</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="h-5 pb-5">
              {currentItems == null ? (
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
                currentItems.length > 0 &&
                currentItems.map((item) => (
                  <tr key={item.id}>
                    <td>KH{item.id}</td>
                    <td>{item.lastname}</td>
                    <td>{item.firtname}</td>
                    
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.status == 1 ? "Hoạt động" : "ẩn"}</td>
                    <td>{item.CCCD}</td>
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
                          type="button"
                          onClick={async function Hiden() {
                            try {
                              let res = await axios.post(
                                `http://localhost:8000/client/hiden/id=${item.id}`,
                                item.id,
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`,
                                  },
                                }
                              );
                              res = await res;
                              window.location = "/customer";
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
                        &nbsp; &nbsp;
                        {/* chỉnh sửa */}
                        <Link type="button" to={`update/${item.id}`}>
                          <i className="bi bi-pencil hover-text black hover-text"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
              {/*  */}
            </tbody>
          </table>
             {/*  phân trang */}

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

          {/*  kết thúc phân trang   */}
        </div>
      </div>
    </div>
  );
}

export default ShowCustomer;
