
import React, { useState } from 'react'
import axios from 'axios'
import './Delete.css'
const Delete = () => {
  const [myname, setmyname] = useState();
  const [iscomplete, setiscomplete] = useState(false);
  const [delmess, setdelmess] = useState('');
  const deletesub = (e) => {
    e.preventDefault();
    setiscomplete(true);
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const deldata = { myname };

        try {
          const mydel = await axios.delete('/api/login/delete', { data: deldata });
          console.log(mydel.data);
          setdelmess(mydel.data.message);


          setmyname('')
          resolve("success");

        } catch (error) {
          console.log(error.message);

        }
        finally {
          setiscomplete(false)
        }
      }, 3000);
    })
  }
  return (
    <div className='delete'>
      <form onSubmit={deletesub}>
        <input type="text" placeholder='Enter Your name' value={myname} onChange={(e) => { setmyname(e.target.value) }} />
        <input type="submit" disabled={iscomplete} value={iscomplete ? ".....Deleting" : "Delete"} />
      </form>
      <p style={{color:"green" ,fontWeight:"bold"}}>{delmess}</p>
    </div>
  )
}

export default Delete
