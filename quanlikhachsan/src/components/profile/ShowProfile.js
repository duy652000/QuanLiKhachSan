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
            
            <h6 className="mt-2">Profile</h6>
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
                    <label htmlFor="name">
                      <h6>Tên</h6>
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
                      <h6>Email</h6>
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
                    />
                  </div>
                </div>


                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="phone">
                      <h6>Số điên thoại</h6>
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
                    <label htmlFor="address">
                      <h6>Địa chỉ</h6>
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
                      name="address"
                      id="address"
                      placeholder="Điền địa chỉ...  "
                      
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-xs-6">
                    <label htmlFor="cccd">
                      <h6>Căn cước công dân</h6>
                    </label>
                    <input
                      onChange={(e) => {
                        setDetails({
                          ...details,
                          CCCD: e.target.value,
                        });
                      }}
                      value={details.CCCD?details.CCCD:''}
                      type="text"
                      className="form-control"
                      name="CCCD"
                      id="CCCD"
                      placeholder="Điền số căn cước..."
                      
                    />
                  </div>
                </div>



                <label htmlFor="phone">
                      <h6>Vai Trò</h6>
                    </label>
            {/* <div className="text-danger">{error.group_id}</div> */}
                <div className="form-group form-check ml-1">
              <input
                type="radio"
                name="1"
                className="form-check-input"
                id="Check1"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    group_id: e.target.value,
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
                    group_id: e.target.value,
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
                    group_id: e.target.value,
                  });
                }}
                value="3"
              />
              <label className="form-check-label" htmlFor="manager">
                manager
              </label>
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
