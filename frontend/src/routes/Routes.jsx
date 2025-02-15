import React from 'react'
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom'
import Register from '../views/register/Register'
function AppRoutes() {
  return (
         <Router>
            <Routes>
               <Route path='/' element = {<div> Home</div>}/>
               <Route path='/register' element = {<Register />}/>
               <Route path='/' element = {<div> Home</div>}/>
            </Routes>
         </Router>
  )
}

export default AppRoutes