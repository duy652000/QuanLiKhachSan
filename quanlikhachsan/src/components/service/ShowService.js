import React, { useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";


function ShowService() {
  
 
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
      <div className="card-body">
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
                <th>Mô tả </th>
                <th>Thời gian tạo </th>
                <th>Thời gian cập nhật </th>
                <th></th>
              </tr>
            </thead>
            
            <tbody>
              {/*  */}

              <tr>
                <td>1</td>
                <td>Nước suối</td>
                <td>10000</td>
                <td>Thức uống</td>
                <td>11::10:10 12-11-2022</td>
                <td>11::10:10 12-11-2022</td>
                <td>
                  <div className="d-flex black">
                    {/* thoát */}
                    <a type="button">
                      <i className="bi bi-box-arrow-right"></i>
                    </a>
                    &nbsp;
                    {/* ẩn */}
                    <a type="button">
                      {<i className="bi bi-eye"></i> ? (
                        <i className="bi bi-eye"></i>
                      ) : (
                        <i className="bi bi-eye-slash"></i>
                      )}
                    </a>
                    &nbsp;
                    {/* chỉnh sửa */}
                    <Link type="button" to="update">
                      <i className="bi bi-pencil hover-text black hover-text"></i>
                    </Link >
                    &nbsp;
                    {/* xóa */}
                    <a type="button">
                      <i className="bi bi-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>

              {/*  */}

              <tr>
                <td>1</td>
                <td>Nước suối</td>
                <td>10000</td>
                <td>Thức uống</td>
                <td>11::10:10 12-11-2022</td>
                <td>11::10:10 12-11-2022</td>
                <td>
                  <div className="d-flex black">
                    {/* thoát */}
                    <a type="button">
                      <i className="bi bi-box-arrow-right"></i>
                    </a>
                    &nbsp;
                    {/* ẩn */}
                    <a type="button">
                      {<i className="bi bi-eye"></i> ? (
                        <i className="bi bi-eye"></i>
                      ) : (
                        <i className="bi bi-eye-slash"></i>
                      )}
                    </a>
                    &nbsp;
                    {/* chỉnh sửa */}
                    <Link type="button" to="update">
                      <i className="bi bi-pencil hover-text black hover-text"></i>
                    </Link >
                    &nbsp;
                    {/* xóa */}
                    <a type="button">
                      <i className="bi bi-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td>Nước suối</td>
                <td>10000</td>
                <td>Thức uống</td>
                <td>11::10:10 12-11-2022</td>
                <td>11::10:10 12-11-2022</td>
                <td>
                  <div className="d-flex black">
                    {/* thoát */}
                    <a type="button">
                      <i className="bi bi-box-arrow-right"></i>
                    </a>
                    &nbsp;
                    {/* ẩn */}
                    <a type="button">
                      {<i className="bi bi-eye"></i> ? (
                        <i className="bi bi-eye"></i>
                      ) : (
                        <i className="bi bi-eye-slash"></i>
                      )}
                    </a>
                    &nbsp;
                    {/* chỉnh sửa */}
                    <Link type="button" to="update">
                      <i className="bi bi-pencil hover-text black hover-text"></i>
                    </Link >
                    &nbsp;
                    {/* xóa */}
                    <a type="button">
                      <i className="bi bi-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td>Nước suối</td>
                <td>10000</td>
                <td>Thức uống</td>
                <td>11::10:10 12-11-2022</td>
                <td>11::10:10 12-11-2022</td>
                <td>
                  <div className="d-flex black">
                    {/* thoát */}
                    <a type="button">
                      <i className="bi bi-box-arrow-right"></i>
                    </a>
                    &nbsp;
                    {/* ẩn */}
                    <a type="button">
                      {<i className="bi bi-eye"></i> ? (
                        <i className="bi bi-eye"></i>
                      ) : (
                        <i className="bi bi-eye-slash"></i>
                      )}
                    </a>
                    &nbsp;
                    {/* chỉnh sửa */}
                    <Link type="button" to="update">
                      <i className="bi bi-pencil hover-text black hover-text"></i>
                    </Link >
                    &nbsp;
                    {/* xóa */}
                    <a type="button">
                      <i className="bi bi-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>




             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowService;
