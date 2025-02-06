import React from 'react'

const Input = ({type, placeholder, value, onChange}) => {
  return (
    <>
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='py-2 px-3 bg-gray-200 text-black text-xl rounded'
    />
    </>
  )
}

export default Input