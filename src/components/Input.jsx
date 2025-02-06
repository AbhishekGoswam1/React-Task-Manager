import React from 'react'

const Input = ({type, placeholder, value, onChange}) => {
  return (
    <>
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='py-2 px-3 bg-white text-black w-56 text-xl rounded outline-none'
    />
    </>
  )
}

export default Input