import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/users/login', {
                email,
                password,
            });
    
            const data = res.data;
            // console.log("data",data.token)
          
            if (data.token) {
                localStorage.setItem('user', JSON.stringify({ token: data.token }));

                const user = JSON.parse(localStorage.getItem('user'));
                 console.log(user.token); // Access the token

 
                navigate('/profile');
            } else {
                setError('Login failed: No token received');
            }
        } catch (err) {
            console.log(err);
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        }
    };
    

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
