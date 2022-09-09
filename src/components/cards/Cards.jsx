import React from 'react';
import './card.css'
import {HiFire } from "react-icons/hi";
import { MdDeliveryDining, MdHotelClass } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { BiHomeHeart } from "react-icons/bi";
import { FiMap } from "react-icons/fi";


const INFOCARD = [

  {
    id: 'i1',
    icon: <HiFire size='2.5em' style={{backgroundColor:'#E74A3B', color: 'white', borderRadius: '24px',padding:'12px'}} />,
    subtitle:'Popular',
    desc: '286+ options'  
  },
  {
    id: 'i2',
    icon: <MdDeliveryDining size='2.5em' style={{backgroundColor:'#CE2642', color: 'white', borderRadius: '24px',padding:'12px'}}/>  ,
    subtitle:'Fast Delivery',
    desc: '1,843+ options'  
  },
  {
    id: 'i3',
    icon: <MdHotelClass size='2.5em' style={{backgroundColor:'#F6C23E', color: 'white', borderRadius: '24px',padding:'12px'}}/>,
    subtitle:'High Class',
    desc: '25+ options'  
  },
  {
    id: 'i4',
    icon: <GiKnifeFork size='2.5em' style={{backgroundColor:'#E74A3B', color: 'white', borderRadius: '24px',padding:'12px'}} />,
    subtitle:'Dine In',
    desc: '182+ options'  
  },
  {
    id: 'i5',
    icon: <BiHomeHeart size='2.5em' style={{backgroundColor:'#CE2642', color: 'white', borderRadius: '24px',padding:'12px'}}/>,
    subtitle:'Pick Up',
    desc: '3548+ options'  
  },
  {
    id: 'i6',
    icon: <FiMap size='2.5em' style={{backgroundColor:'#F6C23E', color: 'white', borderRadius: '24px',padding:'12px'}} />,
    subtitle:'Nearest',
    desc: '44+ options'  
  }

  
]


const Cards = () => {
  return (
    <div className='row'>
      {
        INFOCARD.map((card)=> {
          return(
            <div className='col-lg-2 col-md-4 col-sm-6' key={card.id}>
            <div className='mycard'>
                <div className='my-3 p-3'>
                    { card.icon  }
                </div>
                <div className='mt-2 card-subtitle'>
                    {card.subtitle}
                </div>
                <div className=' p-2 iconColor card-text'>
                  {card.desc}
                </div>
            </div>
            </div>
          )

        })
      }
      {/* <div className='col-lg-2 col-md-4 col-sm-6'>
    <div className='mycard'>
        <div className='my-3 p-3'>
            {icon}
        </div>
        <div className='mt-2 card-subtitle'>
            {subtitle}
        </div>
        <div className=' p-2 iconColor card-text'>
          {desc}
        </div>
    </div>
    </div> */}
    </div>
  )
}

export default Cards