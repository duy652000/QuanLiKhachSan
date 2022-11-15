import React, { useEffect, useState } from "react";
import axios from "axios";

function ShowProfile() {
  const token = JSON.parse(localStorage.getItem("token"));
  //const [data, setData] = useState([]);
  const [details, setDetails] = useState({});

  //get infor
  const getData = async () => {
    //await here
    let res = await axios.get("http://localhost:8000/view-account", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = await res.data;
   
    console.log(res)

    setDetails({name: res.name, 
                email: res.email,
                phone: res.phone});                

   
    //
  };
  useEffect(() => {
    getData();
  }, [token]);

  //////

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(details);
    // updateProfile(details);
  };

  //change infor
  // async function updateProfile(detail) {
  //   try {
  //     let res = await axios.post("http://localhost:8000/", detail, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer`,
  //       },
  //     });
  //     window.location.reload(true);

  //   } catch (error) {

  //   }
  // }
  ////

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          {/* <!--left col--> */}

          <div className="text-center">
            <img
              src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
              className="avatar img-circle img-thumbnail"
              alt="avatar"
            />
            <h6>Profile</h6>
          </div>
          <br />
        </div>
        {/* <!--/col-3--> */}
        <div className="col-sm-9">
          <div className="tab-content">
            <div className="tab-pane active" id="home">
              <hr />
              <form
                onSubmit={handleUpdate}
                className="form"
                action="##"
                method="post"
                id="registrationForm"
              >
                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="first_name">
                      <h4>Họ và tên lót</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      id="first_name"
                      placeholder="Điền họ và tên lót..."
                      title="enter your first name if any."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="name">
                      <h4>Tên</h4>
                    </label>
                    <input
                      onChange={(e) => {
                        setDetails({
                          ...details,
                          name: e.target.value,
                        });
                      }}
                      value={details.name?details.name:''}
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Điền tên..."
                      title="enter your last name if any."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="email">
                      <h4>Email</h4>
                    </label>
                    <input
                      onChange={(e) => {
                        setDetails({
                          ...details,
                          email: e.target.value,
                        });
                      }}
                      value={details.email?details.email:' '}
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="you@email.com"
                      title="enter your email."
                    />Ï
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="phone">
                      <h4>Số điên thoại</h4>
                    </label>
                    <input
                      onChange={(e) => {
                        setDetails({
                          ...details,
                          phone: e.target.value,
                        });
                      }}
                      value={details.phone?details.phone:''}
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="0900000000"
                      title="enter your phone number if any."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="password">
                      <h4>Mật khẩu</h4>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="mật khẫu cũ..."
                      title="enter your password."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="password">
                      <h4>Mật khẩu mới</h4>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password1"
                      id="password1"
                      placeholder="mật khẩu mới..."
                      title="enter your password."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="password2">
                      <h4>Xác nhận mật khẩu mới</h4>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password2"
                      id="password2"
                      placeholder="xác nhận mật khẩu..."
                      title="enter your password2."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-12">
                    <br />
                    <button className="btn btn-lg btn-success" type="submit">
                      <i className="glyphicon glyphicon-ok-sign"></i> Save
                    </button>
                  </div>
                </div>
              </form>

              <hr />
            </div>
          </div>
          {/* <!--/tab-pane--> */}
        </div>
        {/* <!--/tab-content--> */}
      </div>
    </div>
  );
}

export default ShowProfile;
