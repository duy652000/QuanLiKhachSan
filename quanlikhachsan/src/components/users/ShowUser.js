import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ShowUser() {
  const [data, setData] = useState([]);
  const history = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));


  ////////////////////
  //get infor
  const getData = async () => {
    try {
      console.log(token);
      //await here
      let res = await axios.get("http://localhost:8000/all-account", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      res = await res.data.data;
      setData(res);
    } catch (error) {
      localStorage.clear("token");
      history("/login")
      alert("Hết phiên đăng nhập");
      
    }
  };
  useEffect(() => {
    getData();
    console.log(data);
  }, [token]);

  //////




 

  



  ////////////////////

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
                  <td>{item.status}</td>
                  <td>{item.created_at}</td>
                  <td>{item.updated_at}</td>
                  <td>
                    <div className="d-flex black">
                      {/* thoát */}
                      <Link to="/user" type="button"  >
                        <i className="bi bi-box-arrow-right hover-text black"></i>
                      </Link>
                      &nbsp;
                      {/* ẩn */}
                      <a type="button" onClick={
                         async function Hiden() {
                          try {
                            
                            let res = await axios.post(`http://localhost:8000/hiden/id=${item.id}`, item.id, {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                              },
                            });
                            res = await res;
                            console.log(res)
                            window.location.reload(true);
                            alert("Thay đổi trạng thái thành công !");
                        
                          } catch (error) {
                           alert("Thay đổi trạng thái không thành công !")
                          }
                          
                        }
                      }>
                        <i className="bi bi-eye hover-text black hover-text"></i>
                      </a>
                      &nbsp;
                      {/* chỉnh sửa */}
                      <Link type="button" to={`update/${item.id}`}>
                        <i className="bi bi-pencil hover-text black hover-text"></i>
                      </Link>
                      &nbsp;
                      {/* xóa */}
                      <a type="button">
                        <i className="bi bi-trash hover-text"></i>
                      </a>
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
