import React from 'react'
import './Login.css'


function Login() {
  

  return (
     <main>
         <section className='sections-login'>
               <div className='input-groups'>
                      <label htmlFor="">Email :</label>
                      <input type="email" name="email" id="email"  placeholder='Enter Email'/>
               </div>

               <div className='input-groups'>
                      <label htmlFor="">Password :</label>
                      <input type="password" name="password" id="=password"  placeholder='Enter Password'/>
               </div>

               <button>
                 Login
               </button>


         </section>
     </main>
  )
}

export default Login