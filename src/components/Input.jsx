import React from 'react'

const Input = ({type, placeholder, value, onChange}) => {
  return (
    <>
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='py-2 px-3 bg-white text-black w-full text-lg rounded-lg outline-none border-1 border-gray-300 focus:border-blue-500'
    />
    </>
  )
}

export default Input