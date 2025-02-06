import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleLogin = async (e) => {
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard');
    } catch (error) {
        console.error("Error Logging in: ", error.message);
   }
}

   return (
    <div className='flex items-center justify-center h-screen w-full flex-col'>
    <h1>Login</h1>
    <form onSubmit={handleLogin}>
        <input 
            type="email" 
            placeholder='Enter Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
        />
        <input 
            type="password"
            placeholder='Enter Password'
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
    </form>
    </div>
   )

}

export default Login;