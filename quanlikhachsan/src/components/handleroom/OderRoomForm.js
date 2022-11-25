import React from 'react'

function OderRoomForm({dataItem}) {
   
    const item = dataItem
    console.log(item)
 return (
    <>
      {/* modal */}
      <div
  className="modal fade"
  id="OderRoomModal"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      {/* header */}
      <div className="modal-header">
        <h5 className="modal-title text-dark" id="exampleModalLabel ">
          Thông tin đặt phòng
        </h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {/* header */}

      {/* body */}
      <div className="modal-body text-dark">
        <form>
          {/* thông tin khách hàng */}

          {/* <div className="line-page "></div> */}
          <h6 className="my-3">Thông tin khách hàng :</h6>
          <div className="line-page "></div>

          <div className="form-group row mt-3">
            <div className="col-sm-6">
              <label htmlFor="inputLastname">Mã khách hàng :</label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                placeholder="Last name"
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="inputLastname">Tên khách hàng :</label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                placeholder="Last name"
              />
            </div>
          </div>
          {/* thông tin khách hàng */}

          {/* thông tin phòng */}
          <div className="line-page mt-5 "></div>

          <h6 className="my-3">Thông tin phòng :</h6>
          <div className="line-page "></div>

          <div className="form-group row mt-3">
            <div className="col-sm-6">
              <label htmlFor="inputLastname">Tên phòng :</label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                placeholder="Last name"
                defaultValue={item.name_room?item.name_room:""}
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="inputLastname">Giá Phòng :</label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                placeholder="Last name"
                defaultValue={item.price?item.price:""}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-sm-6">
              <label htmlFor="inputLastname">Ngày đến :</label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                placeholder="Last name"
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="inputLastname">Ngày đi :</label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="line-page mt-5"></div>
          <h6 className="my-3">Thông tin dịch vụ :</h6>
          <div className="line-page "></div>

          <div className="form-group row mt-3">
            <div className="col-sm-6">
              <label htmlFor="inputLastname">Tên phòng :</label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                placeholder="Last name"
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="inputLastname">Giá phòng :</label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                placeholder="Last name"
              />
            </div>
          </div>
        </form>
      </div>
      {/* body */}


      {/* footer */}
      <div className="modal-footer">
        {/* <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Close
        </button> */}
        <button type="button" className="btn btn-primary">
          Đặt phòng
        </button>
      </div>
      {/* footer */}

      
    </div>
  </div>
</div>
  {/* modal */}
  </>
  )
}

export default OderRoomForm