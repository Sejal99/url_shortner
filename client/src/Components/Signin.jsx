import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    console.log(email);
    const [password, setPassword] = useState('');
    console.log(password);
  
    const handleLogin = async () => {
        try {
            const response = await fetch('https://url-shortner-46dr.vercel.app/user/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error('network problem');
            }

            const data = await response.json();
            console.log('llllllll', data);

            const token = Cookies.get('uid');
            console.log(token);

            
                navigate('/url');
            
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            <div
                style={{
                    paddingTop: '150px',
                    marginBottom: '10px',
                    textAlign: 'center',
                    fontSize:35
                }}
            >
                <h6>Welcome Back! Sign in below</h6>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <input
                        type="text"
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                        style={{ width: '95%', padding: '10px', marginBottom: '20px' }}
                    />
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        style={{ width: '95%', padding: '10px', marginBottom: '20px' }}
                    />
                    <button
                        style={{
                            width: '30%',
                            padding: '15px',
                            borderRadius: '5px',
                            backgroundColor: '#f79b3c',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                        }}
                        onClick={handleLogin}
                    >
                        Signin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signin;
