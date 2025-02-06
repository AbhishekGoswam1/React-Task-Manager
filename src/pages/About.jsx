import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
        <Navbar />
        <div className="text-white bg-gradient-to-br from-zinc-700 to-black min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-xl text-center mt-2">This is a simple task manager app built using Firebase and React.</p>
        </div>
    </>
  )
}

export default About