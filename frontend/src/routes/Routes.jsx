import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Login from '../views/login/Login'
import Profile from '../views/profile/Profile'
import Register from '../views/register/Register'
import CreatePost from '../views/Createpost/CreatePost'
import ProtectedRout from './ProtectedRout'
function AppRoutes() {
  return (
         < Router>
              <Routes>
                  <Route  path='/' element={<h1>HomePage</h1>}/>
                  
                  <Route  path='/login' element={<Login />}/>
                  
                  < Route  path='/profile'
                  element ={
                      <ProtectedRout>
                         <Profile />
                      </ProtectedRout>
                  }/>
                  
                  <Route  path='/register' element={<Register />}/>
                  <Route path='/feed' element={ < CreatePost />}/>

              </Routes>
         </ Router>
  )
}

export default AppRoutes