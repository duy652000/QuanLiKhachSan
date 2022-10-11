import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom'


function Logout() {
   const history = useNavigate();
 const logout =()=>  {
   localStorage.clear()
   history("/login");
};
 
 return (
    <Button onClick={logout}>Logout</Button>
 )
}

export default Logout