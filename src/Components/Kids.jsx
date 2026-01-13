import React from 'react'
import childcloth from '../Cloths/Cloth'
import './Kids.css'
const Kids = () => {
  return (
    <div className='kids'>
      <div className="mycloth">
        {childcloth.map((i) => (
          <div className="allcloth">
            <img src={i.img} alt="Error" />
            <h4>{i.name}</h4>
            <p>{i.para}</p>
            <div className="kiddetail">
              <p>{i.price}</p>
              <p className='org'>{i.origunal}</p>
              <p>{i.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Kids
