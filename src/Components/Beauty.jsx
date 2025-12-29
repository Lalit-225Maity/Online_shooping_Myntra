import React from 'react'
import './Beauty.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const Beauty = () => {
  const [Joke, setJoke] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/api/beauty');
        setJoke(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [])

  return (
    <div className="beauty">
      <div className="catagory">
        <h3>Catagory</h3>
        {Joke.map((i) => (
          <div className="slide">
            <input type="checkbox" name={i.id} id={i.id} key={i.id} />
            <label htmlFor={i.id}>{i.productname}</label>
          </div>
        ))}
      </div>
      <div className="allproduct">
        {Joke.map((j) => (
          <div className="images">
            <img src={j.img} alt="Error" />
            <p>{j.productname}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Beauty

