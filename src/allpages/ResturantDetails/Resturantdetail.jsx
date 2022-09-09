import React from 'react'
import banner from '../../images/banner.jpg'
import burgerking from '../../images/burgerking.png'

const Resturantdetail = () => {
  return (
    <div>
        <div className='' style={{boxShadow:'0 .125rem .25rem 0 rgba(58,59,69,.2)'}}>
      <div>
        <img className='logosize img-fluid bg-light rounded' src={banner} alt=""   />
      </div>
      <div className=' d-flex '>
        <div>
        <img className="logosize img-fluid bg-light rounded p-3" src= {burgerking} alt=""  width="100px" />
        </div>
        <div className='mx-2 'style={{fontSize:'24px', fontWeight:"900px" }}>
         Burger King  <p className='mx-3' style={{display:'inline', fontSize: '14px',fontWeight:"400px"}}> American, Fast Food</p>
      <div className='d-flex'>
        <div className='mx-1' style={{color: '#e84a3a',backgroundColor: 'rgb(232 74 58/9%)',fontSize:'11px'}}>Free delivery </div>
        <div  className='mx-2' style={{color: '#1cc88a',backgroundColor: 'rgb(28 200 138/0.07)',fontSize:'11px'}}>55% OFF</div>
        <div  className='mx-2' style={{color: '#36b9cc',backgroundColor: 'rgb(54 185 204/0.07)',fontSize:'11px'}}>Opens at 12 PM</div>
      </div>
      <div style={{color:'gray', fontSize:'11px'}}>
      It is one of the most iconic and well-recognizable fast food restaurants out there which offers really amazing food and drinks.
      </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Resturantdetail