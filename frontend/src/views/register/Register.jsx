import React from 'react'
import './Register.css'




function Register() {
  return (
      <main>
          <section className='register-view'>
                  <form >
                          <div className='input-group'>
                               <label htmlFor="username">Username</label>
                               <input type="text" />
                          </div>

                          <div className='input-group'>
                               <label htmlFor="email">Email</label>
                               <input type="email" />
                          </div>

                          <div className='input-group'>
                               <label htmlFor="password">Password</label>
                               <input type="password" />
                          </div>


                  </form>
          </section>
      </main>
  )
}

export default Register