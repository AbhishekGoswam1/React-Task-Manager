import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import React from 'react'
import Navbar from '../components/Navbar'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/dashboard');
        } catch (error) {
            console.error("Error Signing up: ", error.message);
        }
    }

  return (
    <>
        <Navbar />
       <div>
        <h1>
            Signup
        </h1>
        <form onSubmit={handleSignup}>
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
            <button
                type='submit'
                className='bg-amber-100 px-3 py-2 rounded text-black mt-4'>
                Signup
            </button>
        </form>
       </div>
    </>
  )
}

export default Signup