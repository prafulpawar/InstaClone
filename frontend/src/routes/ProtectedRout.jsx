import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function ProtectedRout({children}) {
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("user")
        if(!token) navigate("/login");
    },[])
  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRout