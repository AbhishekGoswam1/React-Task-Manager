import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import Input from '../components/Input'

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleLogin = async (e) => {
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard');
        console.log("Logged in Successfully");
        console.log(`Logged in as: ${email} password: ${password}`);
        
        
    } catch (error) {
        console.error("Error Logging in: ", error.message);
   }
}

   return (
    <div className='flex items-center justify-center h-screen w-full'>
        <div className='bg-blue-500 py-14 px-12 rounded shadow-md'>
            <h1 className='text-5xl font-bold '>Login</h1>
            <form onSubmit={handleLogin}>
            <div className='flex flex-col gap-4 mt-4'>
                <Input 
                    type="email" 
                    placeholder='Enter Email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    type="password"
                    placeholder='Enter Password'
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button 
                type='submit' 
                className='bg-amber-100 px-3 py-2 rounded text-black mt-4'>
                    Login
            </button>
            </form>
        </div>
    </div>
   )

}

export default Login;