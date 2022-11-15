import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


function Logout() {
   const history = useNavigate();
 const logout =()=>  {
   localStorage.clear("token")
   history("/")
};
 
 return (

    <a className="dropdown-item" data-toggle="modal" data-target="#logoutModal" onClick={logout}>
    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
    Logout
   </a>
 )
}

export default Logout