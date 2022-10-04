import React from 'react'

const Header = () => {
  return (
    <div className='w-100 d-flex p-3 border-0 rounded' style={{backgroundColor:"#c60021", color:'white', fontSize:'18px'}}>
        <div className='w-25  text-center'>
            Products
        </div>
        <div className='w-25  text-center'>
         Price
        </div>
        <div className='w-25 text-center'>
            Quantity
        </div>
        <div className='w-25 text-center'>
            Total
        </div>
        <div className='w-25 text-center'>
                    Delete
                </div>
    </div>
  )
}

export default Header