import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import { AppContext } from "../../Context/AppContext";

function ShowUser() {
  const token = JSON.parse(localStorage.getItem("token"));
  const history = useNavigate();
  const { userData } = useContext(AppContext);
  const data = userData;

  async function Hiden(id) {
    try {
      let res = await axios.post(`http://localhost:8000/hiden/id=${id}`, id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload(true);
      alert("Thay đổi trạng thái thành công !");
    } catch (error) {
      alert("Thay đổi trạng thái không thành công !");
    }
  }
  const handleHiden = (e, id) => {
    e.preventDefault();
    Hiden(id);
  };

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
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
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
                      <a type="button" onClick={handleHiden(item.id)}>
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
              ))}

              {/*  */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowUser;
