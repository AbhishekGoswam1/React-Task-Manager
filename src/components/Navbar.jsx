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
    <header className="z-10 fixed top-0 w-full bg-opacity-20 backdrop-blur-lg shadow-lg px-6 py-4 flex justify-between items-center text-gray-300">
        <h1 className="text-2xl font-bold">Prio</h1>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex text-gray gap-8">
          <Link to="/#" className="text-lg font-medium">Home</Link>
          <Link to="/login" className="text-lg font-medium">Login</Link>
          <Link to="/Signup" className="text-lg font-medium">Signup</Link>
          <Link to="/Dashboard" className="text-lg font-medium">Dashboard</Link>
          <Link to="/About" className="text-lg font-medium">About</Link>
        </nav>
        
        {/* Mobile Menu */}
        <button className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 top-14 fixed right-0 w-40 bg-[#101828ac] text-gray-300 backdrop-blur-lg shadow-lg py-8 px-6 rounded-xl flex items-start flex-col gap-4 md:hidden"
        >
          <Link to="/#" className="text-xl font-medium">Home</Link>
          <Link to="/login" className="text-xl font-medium">Login</Link>
          <Link to="/Signup" className="text-xl font-medium">Signup</Link>
          <Link to="/Dashboard" className="text-xl font-medium">Dashboard</Link>
          <Link to="/About" className="text-xl font-medium">About</Link>
        </motion.nav>
      )}
    </>
  )
}

export default Navbar;