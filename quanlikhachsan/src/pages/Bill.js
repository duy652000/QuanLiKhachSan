import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import ClipLoader from "react-spinners/ClipLoader";
import { AppContext } from "../Context/AppContext";
import moment from "moment";
import DetailsBill from "../components/bill/DetailsBill";
import { Button } from "react-bootstrap";
import { useCallback } from "react";
import ReactPaginate from "react-paginate";

function Bill() {
  const { billData } = useContext(AppContext);
  const data = billData;

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

  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
    }, 5000);
  }, []);

  const token = JSON.parse(localStorage.getItem("token"));
  const [loadingData, setLoadingData] = useState(false);
  const [dataDetailsBill, setDataDetailsBill] = useState([]);

  //get api by id
  const getData = useCallback(
    async (id) => {
      let res = await axios.get(
        `http://localhost:8000/bill/viewbill/id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      res = await res.data.data;
      setDataDetailsBill(res);
    },
    [token]
  );

  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* 
               <!-- Page Heading --> */}
      <div className="d-flex justify-content-between ">
        <h1 className="h3 mb-2 text-gray-800">Hóa Đơn</h1>

        {/* <!-- Topbar Search --> */}
        <div>
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search ">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-0 small"
                placeholder="Tìm kiếm ......"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <p className="mb-4"></p>

      {/* <ShowUser/> */}

      <div className="card shadow mb-4 ">
        <div className="card-header py-3 d-flex justify-content-between">
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
                  <th>ID</th>
                  <th>Trạng thái</th>
                  <th>Ngày Đặt</th>
                  <th>Ngày Trả</th>
                  <th>Tổng Hóa Đơn</th>
                  <th></th>
                </tr>
              </thead>

              <tbody className="h-5 pb-5">
                {currentItems.length == 0 ? (
                  <tr>
                    <td>
                      <ClipLoader
                        id="customer"
                        className="load-spinner-table "
                        color="#b5b6b7  "
                        loading={loadingData}
                        data-testid="loader"
                        size={35}
                        speedMultiplier={1}
                      />
                    </td>
                  </tr>
                ) : (
                  currentItems.length > 0 &&
                  currentItems.map((item) => (
                    <tr key={item.id}>
                      <td>HD{item.id}</td>
                      <td
                        className={
                          item.status === 1
                            ? "text-danger"
                            : item.status === 2
                            ? "text-success"
                            : ""
                        }
                      >
                        {item.status === 1
                          ? "Chưa Thanh Toán"
                          : item.status === 2
                          ? "Đã Thanh Toán"
                          : "Đã Hủy"}
                      </td>
                      <td>{moment.unix(item.day_in).format("DD-MM-YYYY")}</td>
                      <td>{moment.unix(item.day_out).format("DD-MM-YYYY")}</td>
                      <td>
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.total_money ?? 0)}
                      </td>

                      <td>
                        <div className="d-flex">
                          <a
                            onClick={function handleGetDataRoom(e) {
                              e.preventDefault();
                              getData(item.id);
                            }}
                            className="  pl-1 pr-1  ml-1"
                            variant="primary"
                            type="button"
                            data-toggle="modal"
                            data-target="#detailsbill"
                            data-whatever="@getbootstrap"
                          >
                            <i className="bi bi-journal-text hover-text black p-2 "></i>
                          </a>
                          <DetailsBill
                            dataDetailsBill={[
                              dataDetailsBill,
                              item.day_in,
                              item.day_out,
                            ]}
                          />
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

      {/*  */}
    </div>
    // <!-- /.container-fluid -->
  );
}

export default Bill;
