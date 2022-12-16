import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Role(props) {

  
    let Cmp =props.Cmp.name

    const history =useNavigate();
   
  return (
    <div>
        <Cmp />
    </div>
  )
}

export default Role