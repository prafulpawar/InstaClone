import React from 'react'
import './Login.css'


function Login() {
  return (
     <main>
         <section>
               <div className='input-group'>
                      <label htmlFor="">Email</label>
                      <input type="email" name="email" id="email"  placeholder='Enter Email'/>
               </div>

               <div className='input-group'>
                      <label htmlFor="">Email</label>
                      <input type="password" name="password" id="=password"  placeholder='Enter Password'/>
               </div>


         </section>
     </main>
  )
}

export default Login