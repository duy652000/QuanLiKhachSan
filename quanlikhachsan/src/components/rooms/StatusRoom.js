import React from 'react'

function StatusRoom() {
  return (
    <div className="d-flex justify-content-around">
    <div>
      <button type="button" className="btn btn-primary">
        
      </button>
      <span> : Trống</span>
    </div>
    <div>
      <button type="button" className="btn btn-warning">
        
      </button>
      <span> : Đã đặt</span>
    </div>
    <div>
      <button type="button" className="btn btn-danger">
        
      </button>
      <span> : Cần dọn dẹp</span>
    </div>
  </div>
  )
}

export default StatusRoom