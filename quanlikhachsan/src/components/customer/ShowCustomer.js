import React  from 'react'
import  { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";




function ShowCustomer() {


  const [data, setData] = useState([]);
  ////////////////////
   const token = JSON.parse(localStorage.getItem("token"));
   //get infor
   const getData = async ()=> {
    console.log(token);
    //await here
    let res = await axios.get("http://localhost:8000/all-account", {
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
                    <th>Họ</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Số điện thoại </th>
                    <th>Sinh nhật</th>
                    <th>CCCD</th>
                    <th>Create at</th>
                    <th>Update at</th>                
                    <th></th>
                  </tr>
                </thead>
                
                <tbody>
                  {/*  */}
                 
                  <tr>
                    <td></td>
                    <td>Vo</td>
                    <td>Duy</td>
                    <td>vkd123@gmail</td>
                    <td>0900000</td>
                    <td>28/01/2000</td>
                    <td>12312312</td>
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
                 
    
                  
    
    
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}

export default ShowCustomer