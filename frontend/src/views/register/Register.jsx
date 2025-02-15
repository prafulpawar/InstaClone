import React from 'react'
import './Register.css'




function Register() {
  return (
      <main>
          <section className='register-view'>
                  <form >
                          <div className='input-group'>
                               <label htmlFor="username">Username:</label>
                               <input type="text" placeholder='Enter Username' />
                          </div>

                          <div className='input-group'>
                               <label htmlFor="email">Email:</label>
                               <input type="email" placeholder='Enter Email' />
                          </div>

                          <div className='input-group'>
                               <label htmlFor="password">Password:</label>
                               <input type="password" placeholder='Enter Password' />
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