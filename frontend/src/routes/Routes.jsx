import React from 'react'
import {BrowserRouter as R, Route, Router}  from 'react-router-dom'
function Routes() {
  return (
         <Router>
            <Routes>
               <Route path='/' element = {<div> Home</div>}/>
               <Route path='/' element = {<div> Home</div>}/>
               <Route path='/' element = {<div> Home</div>}/>
            </Routes>
         </Router>
  )
}

export default Routes