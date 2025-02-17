import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRout() {
    const token  =  localStorage.getItem('user');
    console.log(token.JSON())
}

export default ProtectedRout