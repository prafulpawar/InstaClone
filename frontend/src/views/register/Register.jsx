import React, { useState } from 'react'
import './Register.css'

function Register() {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    console.log(username,email,password)

  return (
      <main>
          <section className='register-view'>
                  <form >
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
                  <div className='error'>
                      
                  </div>
          </section>
      </main>
  )
}

export default Register