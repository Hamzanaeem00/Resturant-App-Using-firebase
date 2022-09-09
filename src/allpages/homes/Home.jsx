import React from 'react'
import Cards from '../../components/cards/Cards';
import CardsResturants from '../../components/cards/CardsResturants';
import Foodcard from '../../components/cards/Foodcard/Foodcard';




function Home() {
  return (
  <div>
   <div className='mt-3'>
    Explore Categories
   </div>
   <div>
    <Cards/>
   </div>
   <div className='mt-5'>
   Featured Resturants
   </div>
   <div>
    <CardsResturants />
   </div>
    <div className='mt-5'>
      Asian Food
    </div>
    
    <div>
        <Foodcard />
       </div>
    

  </div>
    
  )
}

export default Home
