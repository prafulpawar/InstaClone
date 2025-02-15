import React, { useState } from 'react'
import './Register.css'
import {useNavigate} from'react-router-dom'
import axios from 'axios'
function Register() {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [ error, setError ] = useState("")
    console.log(username,email,password)
     const Navigate = useNavigate()

    // now api calling 
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/users/register',{
            username,
            email,
            password
        }).then((res)=>{
             const data = res.data;
             localStorage.setItem("token",data.token)
             Navigate('/profile')
        }).catch(err=>{
             if(err.response.data?.message){
                 setError(err.response.data.message)
             }
        })
    }
   
  return (
      <main>
          <section className='register-view'>
                  <form onSubmit={handleSubmit} >
                          <div className='input-group'>
                               <label htmlFor="username">Username:</label>
                                    <input value={username} onChange={(e)=>setUsername(e.target.value)}   id='username' type="text" placeholder='Enter Username' />
                          </div>

                          <div className='input-group'>
                               <label htmlFor="email">Email:</label>
                               <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Email' id='email' />
                          </div>

                          <div className='input-group'>
                               <label htmlFor="password">Password:</label>
                               <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Password' id='password' />
                          </div>
                         <button>
                             Register
                         </button>
                  </form>
                  {error && <div className="error">{error}</div>}
          </section>
      </main>
  )
}

export default Register