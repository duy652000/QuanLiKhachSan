import React from "react";

function FormVertifi() {
  return (
    <div className=" col-md-8 offset-md-2 mt-5">
    <div className="card card-outline-secondary">

        
      <div className="card-header">
        <h3 className="mb-0">vertifi</h3>
      </div>


      <div className="card-body">
        <form className="form" role="form" autoComplete="off">
          <div className="form-group">

            <div className="d-flex justify-content-center">
            <h6>we sent code to : ***@***</h6>
            </div>
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>Holy guacamole!</strong> You should check in on some of
              those fields below.
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="form-group mt-4 d-flex justify-content-between">
                <label htmlFor="inputPasswordOld" className=" mr-5 col-sm">Code</label>
                <input
                  type="number"
                  className="form-control mr-5 col-7"
                  id="old_password"
                  required=""
                  name="old_password" 
                />
               
              </div>
            
            <a className="hove form-group d-flex justify-content-center col-10 ml-1 mr-5 ">Resend Code ?</a>
          </div>
          <div className="form-group d-flex justify-content-center col-10 ">
            <button type="submit" className="btn btn-success btn-lg ml-5 mr-5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default FormVertifi;
