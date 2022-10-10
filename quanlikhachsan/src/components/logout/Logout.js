import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';


function Logout() {
 const logout =()=>  localStorage.clear();
 return (
    <Button onClick={logout}>Logout</Button>
 )
}

export default Logout