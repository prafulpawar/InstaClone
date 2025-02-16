import React, { useState } from 'react'
import './Login.css'


function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")

  return (
     <main>
         <section className='sections-login'>
               <form action="">


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

               </form>


         </section>
     </main>
  )
}

export default Login