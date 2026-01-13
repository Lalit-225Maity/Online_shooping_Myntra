import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Update.css'
const Update = () => {
  const [name, setname] = useState();
  const [newpass, setnewpass] = useState();
  const [currentpass, setcurrentpass] = useState();
  const [letter, setletter] = useState([]);
  const [updatep, setupdatep] = useState([]);
  const mysubmit = async (e) => {
    e.preventDefault();
    const newdata = { name, newpass, currentpass };
    const resp = await axios.put('/api/login/update', newdata);
    setupdatep(resp.data.user);
    console.log(resp.data.user);


  }
  const myok = async () => {
    try {
      const response2 = await axios.get('/api/login');
      setletter(response2.data);
    } catch (error) {
      console.log(error);

    }
  }


  return (
    <div className='update'>
      <form onSubmit={(e) => {
        mysubmit(e);
        myok();
      }}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => { setname(e.target.value) }} />
        <input type="password" placeholder='Enter old password' value={currentpass} onChange={(e) => { setcurrentpass(e.target.value) }} />
        <input type="password" placeholder='Enter New password' value={newpass} onChange={(e) => { setnewpass(e.target.value) }} />
        <input type="submit" value="Submit" />
      </form>
     
      <p>{updatep.name}</p>
    </div>
  )
}

export default Update
