import React from 'react'
import CardsResturants from '../../components/cards/CardsResturants'
import Foodcard from '../../components/cards/Foodcard/Foodcard'

function Explore() {
  return (
    <div>
     <div className='mt-3'>
      Resturants nearby
     </div>
     <div>
      <CardsResturants />
     </div>
     <div className='mt-5'>
      Popular Food
     </div>
     <div className='mt-2'>
      <Foodcard/>
     </div>
    </div>
  )
}

export default Explore
