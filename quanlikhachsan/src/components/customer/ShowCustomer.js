import React from 'react'
import { Link, Routes, Route } from "react-router-dom";



function ShowCustomer() {
    return (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              <Link to="add" type="button" className="btn btn-success">
                {" "}
                Thêm Khách Hàng
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
                    <th>Seckey</th>
                    <th>Vai Trò</th>
                    <th>Tên đăng nhập</th>
                    <th>Số điện thoại</th>
                    <th>E-mail</th>
                    <th>Trạng thái</th>
                    <th>Đã tạo lúc</th>
                    <th>Lần đăng nhập cuối</th>
                    <th></th>
                  </tr>
                </thead>
                
                <tbody>
                  {/*  */}
    
                  <tr>
                    <td>1410</td>
                    <td>ASDA7SAS9IAS898ADS</td>
                    <td>pv</td>
                    <td>quochoi</td>
                    <td>090000000</td>
                    <td>vkd@gmail.com</td>
                    <td>Kích hoạt</td>
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
                    <td>1410</td>
                    <td>ASDA7SAS9IAS898ADS</td>
                    <td>pv</td>
                    <td>quochoi</td>
                    <td>090000000</td>
                    <td>vkd@gmail.com</td>
                    <td>Kích hoạt</td>
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
                          <i className="bi bi-pencil hover-text black"></i>
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
                    <td>1410</td>
                    <td>ASDA7SAS9IAS898ADS</td>
                    <td>pv</td>
                    <td>quochoi</td>
                    <td>090000000</td>
                    <td>vkd@gmail.com</td>
                    <td>Kích hoạt</td>
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
                          <i className="bi bi-pencil hover-text black"></i>
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
                    <td>1410</td>
                    <td>ASDA7SAS9IAS898ADS</td>
                    <td>pv</td>
                    <td>quochoi</td>
                    <td>090000000</td>
                    <td>vkd@gmail.com</td>
                    <td>Kích hoạt</td>
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
                          <i className="bi bi-pencil hover-text black"></i>
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

export default ShowCustomer