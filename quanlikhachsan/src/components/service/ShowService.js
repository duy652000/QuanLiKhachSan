import React, { useEffect ,useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";



function ShowService() {

  const [data, setData] = useState([]);
  ////////////////////
   const token = JSON.parse(localStorage.getItem("token"));
   //get infor
   const getData = async ()=> {
    console.log(token);
    //await here
    let res = await axios.get("http://localhost:8000/service/service-info", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    res = await res.data.data;
    setData(res);
    
    
  }
  useEffect(() => {
    getData();
    console.log(data)
  },[token]);


  

  //////

  ////////////////////
  
 
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
                <th>Ngày tạo </th>
                <th>Ngày cập nhật </th>
                <th></th>
              </tr>
            </thead>
            
            <tbody>
              {/*  */}
              {
                data.map((item)=>
             
              <tr key={item.id}>
                <td>{item.id+1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.created_at}</td>
                <td>{item.updated_at}</td>
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
              </tr>)
               }

             




             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowService;
