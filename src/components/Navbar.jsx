import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {/* Header */}
    <header className="fixed top-0 w-full bg-opacity-20 backdrop-blur-lg shadow-lg p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex text-white gap-8">
          <Link to="/#" className="hover:text-gray-200 text-lg font-normal">Home</Link>
          <Link to="/login" className="hover:text-gray-200 text-lg font-normal">Login</Link>
          <Link to="/Signup" className="hover:text-gray-200 text-lg font-normal">Signup</Link>
          <Link to="/Dashboard" className="hover:text-gray-200 text-lg font-normal">Dashboard</Link>
          <Link to="/About" className="hover:text-gray-200 text-lg font-normal">About</Link>
        </nav>
        
        {/* Mobile Menu */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.nav 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-16 right-0 w-40 bg-indigo-700 p-5 flex items-center flex-col gap-4 md:hidden"
        >
          <Link to="/#" className="hover:text-gray-200 text-xl font-normal">Home</Link>
          <Link to="/login" className="hover:text-gray-200 text-xl font-normal">Login</Link>
          <Link to="/Signup" className="hover:text-gray-200 text-xl font-normal">Signup</Link>
          <Link to="/Dashboard" className="hover:text-gray-200 text-xl font-normal">Dashboard</Link>
          <Link to="/About" className="hover:text-gray-200 text-xl font-normal">About</Link>
        </motion.nav>
      )}
    </>
  )
}

export default Navbar;