import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateUser() {

  const token = JSON.parse(localStorage.getItem("token"));
  const [error, setError] = useState("");
  const [details, setDetails] = useState({});
  const history = useNavigate();
  const {id} = useParams();
  const danh ="danh"

  



  //get infor
  const getDataUser = async () => {
    //await here
    try {
      console.log(token)
      let res = await axios.get(`http://localhost:8000/account/id=${id}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      res = await res.data;
      let kq =res.data;
      console.log(kq)
      setDetails({
        name: kq.name,
        email: kq.email,
        phone: kq.phone,
        address: kq.address,
        CCCD: kq.CCCD,
        role: "",
      });



    } catch (error) {
      console.log("error",error);
      alert("Hết phiên đăng nhập !");
      localStorage.clear("token");
      history("/login");
    }
  };

  useEffect(() => {
    getDataUser();
  }, [token]);
  //////

 
 // update 
  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(details);

    
    updateProfile(details);
  };

  // change infor
  async function updateProfile(detail) {
    try {
      let res = await axios.post(
        `http://localhost:8000/update-account/?id=${id}`,
        detail,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      res = await res;
      history("/service");

    } catch (error) {}
    // console.log("error", error);
    setError(JSON.parse(error.response.data));
  }
  //
////

///


  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3  d-flex justify-content-between">
        <h6 className="mt-2 font-weight-bold text-primary">Update Account</h6>
        <div className="">
          <Link type="button" to="/user" className="btn btn-primary fw-bold">
            <i className="bi bi-arrow-return-right"></i> Back
          </Link>
        </div>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <form className="ml-1" onClick={handleUpdate}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Tên</label>
              <p className="text-danger">{error.name}</p>

              <input
                type="text "
                className="form-control"
                id="name"
                placeholder="name "
                onChange={(e) => {
                  setDetails({
                    ...details,
                    name: e.target.value,
                  });
                }}
                value={details.name ? details.name : ""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <p className="text-danger">{error.email}</p>

              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    email: e.target.value,
                  });
                }}
                value={details.email ? details.email : ""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại</label>
              <p className="text-danger">{error.phone}</p>

              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Điền số điện thoại ..."
                onChange={(e) => {
                  setDetails({
                    ...details,
                    phone: e.target.value,
                  });
                }}
                value={details.phone ? details.phone : ""}
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="CCCD">Căn cước công dân </label>
              <p className="text-danger">{error.CCCD}</p>

              <input
                type="number"
                className="form-control"
                id="CCCD"
                name="CCCD"
                placeholder="Điền số căn cước công dân ... "
                onChange={(e) => {
                  setDetails({
                    ...details,
                    CCCD: e.target.value,
                  });
                }}
                value={details.CCCD ? details.CCCD : ""}
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Địa chỉ</label>
              <p className="text-danger">{error.address}</p>

              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Điền địa chỉ ..."
                onChange={(e) => {
                  setDetails({
                    ...details,
                    address: e.target.value,
                  });
                }}
                value={details.address ? details.address : ""}
                
              />
            </div>

            

            <label htmlFor="role">
              <h6>Vai Trò</h6>
            </label>
            <p className="text-danger">{error.role}</p>

            <div className="form-group form-check ml-1">
              <input
                type="radio"
                name="1"
                className="form-check-input"
                id="Check1"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    role: e.target.value,
                  });
                }}
                value="1"
              />
              <label className="form-check-label" htmlFor="admin">
                admin
              </label>
            </div>

            <div className="form-group form-check ml-1">
              <input
                type="radio"
                name="1"
                className="form-check-input"
                id="Check2"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    role: e.target.value,
                  });
                }}
                value="2"
              />
              <label className="form-check-label" htmlFor="user">
                user
              </label>
            </div>

            <div className="form-group form-check ml-1">
              <input
                type="radio"
                name="1"
                className="form-check-input"
                id="Check3"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    role: e.target.value,
                  });
                }}
                value="3"
              />
              <label className="form-check-label" htmlFor="manager">
                manager
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Lưu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
