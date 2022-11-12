import React from "react";
import { Link } from "react-router-dom";

function ShowUser() {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          <Link to="add" type="button" className="btn btn-success">
            {" "}
            Thêm Account
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
                <th>Name</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>CCCD</th>
                <th>Create at</th>
                <th>Update at</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {/*  */}

              <tr>
                <td>1410</td>
                <td>Dii</td>
                <td>vkd@gmail.com</td>
                <td>09000000</td>
                <td>180 tạ quan bửu ,p4 ,q8</td>
                <td>989765312</td>
           
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
                    </Link>
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
                <td>Dii</td>
                <td>vkd@gmail.com</td>
                <td>09000000</td>
                <td>180 tạ quan bửu ,p4 ,q8</td>
                <td>989765312</td>
           
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
                    </Link>
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
                <td>Dii</td>
                <td>vkd@gmail.com</td>
                <td>09000000</td>
                <td>180 tạ quan bửu ,p4 ,q8</td>
                <td>989765312</td>
           
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
                    </Link>
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
                <td>Dii</td>
                <td>vkd@gmail.com</td>
                <td>09000000</td>
                <td>180 tạ quan bửu ,p4 ,q8</td>
                <td>989765312</td>
           
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
                    </Link>
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

export default ShowUser;
