import React from 'react'
import './cardsResturants.css'
import burgerking from '../../images/burgerking.png'
import pizzahut from '../../images/pizzahut.png';
import kfc from '../../images/kfc.png';
import macd from '../../images/macd.png';
import subway from '../../images/subway.png'
import domino from '../../images/domino.png'
import { Link } from 'react-router-dom';




const ResturantCards =[
  {
    id: 'r1',
   image: <img className="logosize img-fluid bg-light rounded p-3" src= {burgerking} alt=""  width="100px" />,
   title: 'Burger King',
   rating: '0.8(873)',
   item: 'Burger',
   price: '350$',
   type: 'free delivery',
   distance: '0.3 km'
  },
  {
    id: 'r2',
    image: <img className="logosize img-fluid bg-light rounded p-3" src= {pizzahut} alt=""  width="100px" />,
    title: 'Pizza Hut',
    rating: '0.8(873)',
    item: 'Pizza',
    price: '350$',
    type: 'free delivery',
    distance: '0.3 km'
   },
   {
    id: 'r3',
    image: <img className="logosize img-fluid bg-light rounded p-3" src= {kfc} alt=""  width="100px" />,
    title: 'KFC',
    rating: '0.8(873)',
    item: 'Nuggets',
    price: '350$',
    type: 'free delivery',
    distance: '0.3 km'
   },
   {
    id: 'r4',
    image: <img className="logosize img-fluid bg-light rounded p-3" src= {macd} alt=""  width="100px" />,
    title: 'McDonalds',
    rating: '0.8(873)',
    item: 'Burger ',
    price: '350$',
    type: 'free delivery',
    distance: '0.3 km'
   },
   {
    id: 'r5',
    image: <img className="logosize img-fluid bg-light rounded p-3" src= {domino} alt=""  width="100px" />,
    title: 'Dominos Pizza',
    rating: '0.8(873)',
    item: 'Pizza',
    price: '350$',
    type: 'free delivery',
    distance: '0.3 km'
   },
   {
    id: 'r6',
    image: <img className="logosize img-fluid bg-light rounded p-3" src= {subway} alt=""  width="100px" />,
    title: 'Subway',
    rating: '0.8(873)',
    item: 'Burger',
    price: '350$',
    type: 'free delivery',
    distance: '0.3 km'
   }

]
const CardsResturants = () => {
  return (
    <div className='row'>
      {ResturantCards.map((ResCards)=>{
        return(
          <div className='col-lg-4 col-md-12 col-sm-12' key={ResCards.id}>
            <Link  style={{ textDecoration: "none", color: "black" }}
                to="/resturantdetail">
          <div  className='d-flex myCard mt-3' >
            <div>
              {ResCards.image}
            </div>
            <div className='mx-4 p-2 maintitle'>
              <div>
             {ResCards.title}
              </div>
              <div className='d-flex justify-content-between mt-2 '>
                  <div className='cardDesc'>{ResCards.rating}</div>
                  <div className='cardDesc'>{ResCards.item}</div>
                  <div className='cardDesc'>{ResCards.price}</div>
              </div>
              <div className='d-flex justify-content-between mt-2'>
                  <div className='delivery'>
                      {ResCards.type}
                  </div>
                  <div className='dist mx-3'>
                      {ResCards.distance}
                  </div>
              </div>
            </div>
          </div>
          </Link>
          </div>
          
        )
      })}
      {/* <div className='col-lg-4 col-md-6 col-sm-12'>
    <div  className='d-flex myCard mt-3'>
      <div>
        {pic}
      </div>
      <div className='mx-4 p-2 maintitle'>
        <div>
       {title}
        </div>
        <div className='d-flex justify-content-between mt-2 '>
            <div className='cardDesc'>{rating}</div>
            <div className='cardDesc'>{item}</div>
            <div className='cardDesc'>{price}</div>
        </div>
        <div className='d-flex  mt-2'>
            <div className='delivery'>
                {type}
            </div>
            <div className='dist mx-3'>
                {distance}
            </div>
        </div>
      </div>
    </div>
    </div> */}
    </div>
  )
}

export default CardsResturants
