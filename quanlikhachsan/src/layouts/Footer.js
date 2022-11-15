import React from 'react'

function Footer() {
  return (
    //   {/* <!-- Footer --> */}
      <footer className="sticky-footer bg-white">
      <div className="container my-auto">
          <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website {new Date().getFullYear()}</span>
          </div>
      </div>
    </footer>
//   {/* <!-- End of Footer --> */}
  )
}

export default Footer