import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
            {
                 localStorage.getItem('token')&&
                 <Navbar.Brand href="/">Dashboard</Navbar.Brand>
            }
          <Nav className="me-auto navbar_warapper">
          {
                 localStorage.getItem('token')?
                 <>
                 <Link to="/staffs">Nhân Viên</Link>
                 <Link to="/rooms">Phòng</Link>
                 <Link to="/register">Đăng Ký</Link>
                 </>:
                 <Link to="/login">Đăng Nhập</Link>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;