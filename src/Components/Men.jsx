import React from 'react'
import tshirts from './Shirts'
import { NavLink,useNavigate } from 'react-router-dom'
import './Men.css'
 
const Men = () => {
   

  return (
    <div className='/' id='box'>
      {tshirts.map((i) => (
        
        <NavLink to='/form' className="compose" state={{product:i}}>
        
          <img src={i.image} alt="" />
          <p>{i.name}</p>
          <p>{i.des}</p>
          <span className='vix'>
            <p>Rs.{i.price}</p>
         
            <p className='me'>{i.mainprice}</p>
            <p>{i.discount}</p>
          </span>

        </NavLink>
      ))}
    </div>
  )
}

export default Men
