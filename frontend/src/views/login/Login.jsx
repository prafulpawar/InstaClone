import React, { useEffect, useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
      const [email,setEmail] = useState("");
      const [password,setPassword]  = useState("");
      const [error,setError] = useState("");
      const navigate = useNavigate()

      function handleClick(e){
            e.preventDefault();
         axios.post('http://localhost:3000/users/login',{
            email,
            password
         }).then((res)=>{
             console.log(res)
            const data = res.data;
            localStorage.setItem('user',{token:data})
            navigate('/profile')
         }).catch(err =>{
            if (err.response.data?.message) {
                setError(err.response.data.message)
            }
         })

      }
    

    return (
        <main>
            <section className="sections-login">
                <form onSubmit={handleClick}>
                    <div className="input-groups">
                        <label htmlFor="email">Email:</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email"
                        />
                    </div>

                    <div className="input-groups">
                        <label htmlFor="password">Password:</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                        />
                    </div>

                    <button type="submit">Login</button>
                </form>

                {error && <div className="error">{error}</div>}
            </section>
        </main>
    );
}

export default Login;
