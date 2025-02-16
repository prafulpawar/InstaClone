import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error,setError] = useState("")

    const Navigate = useNavigate()
    const handleClick = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/users/login',{
            email,
            password
        }).then((res)=>{
             const data = res.data
             localStorage.setItem(data);
             Navigate('/profile')
        }).catch(err=>{
            console.log(err)
            if(err.respoanse.data?.message){
                setError(err.respoanse.data?.message)
            }
        })


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

                {error &&  err.respoanse.data?.message }

            </section>
        </main>
    )
}

export default Login