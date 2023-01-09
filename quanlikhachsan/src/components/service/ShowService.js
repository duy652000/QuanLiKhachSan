import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import ClipLoader from "react-spinners/ClipLoader";
import { AppContext } from "../../Context/AppContext";
import ReactPaginate from "react-paginate";

function ShowService({ dataServiceSearch }) {
  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
    }, 0);
  }, []);

  //lấy dữ liệu dịch vụ từ appcontext
  const { serviceData } = useContext(AppContext);
  const data =
    dataServiceSearch[0].length == 0 && dataServiceSearch[1] == true
      ? []
      : dataServiceSearch[0].length == 0 && dataServiceSearch[1] == false
      ? serviceData
      : dataServiceSearch[0];

  //// phân trang
  const [itemOffset, setItemOffset] = useState(0);
  //số item có trong trang
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  //số page tồn tạo
  const pageCount = Math.ceil(data?.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  ////
  
  const token = JSON.parse(localStorage.getItem("token"));
  const [loadingData, setLoadingData] = useState(false);

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          <Link to="add" type="button" className="btn btn-success">
            {" "}
            Thêm Dịch Vụ
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
                <th>Tên</th>
                <th>Giá</th>
                <th>Trạng thái</th>
                <th>Mô tả </th>
                <th>Ngày tạo </th>
                <th>Ngày cập nhật </th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {/*  */}

              {currentItems.length == 0 ? (
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
                currentItems.length > 0 &&
                currentItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.price ?? 0)}
                    </td>
                    <td>{item.status == 1 ? "Hoạt động" : "ẩn"}</td>
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
                        <a
                          type="button"
                          onClick={async function Hiden() {
                            try {
                              let res = await axios.post(
                                `http://localhost:8000/service/hiden/id=${item.id}`,
                                item.id,
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`,
                                  },
                                }
                              );
                              res = await res;
                              window.location = "/service";
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

export default ShowService;
