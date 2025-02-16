import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const handleClick = (e)=>{
        e.preventDefault();
        axios.post('')

    }
    return (
        <main>
            <section className='sections-login'>
                <form onSubmit={handleClick}>


                    <div className='input-groups'>
                        <label htmlFor="">Email :</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Enter Email' />
                    </div>

                    <div className='input-groups'>
                        <label htmlFor="">Password :</label>
                        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" name="password" id="=password" placeholder='Enter Password' />
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