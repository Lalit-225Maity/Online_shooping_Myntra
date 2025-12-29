
import React, { useState } from 'react'
import axios from 'axios'
import './Delete.css'
const Delete = () => {
  const [myname, setmyname] = useState();
  const [iscomplete, setiscomplete] = useState(false);
  const deletesub = (e) => {
    e.preventDefault();
    return new Promise( (resolve, reject) => {
      setTimeout(async () => {
        const deldata = { myname };
        resolve("success");
        try {
          const mydel = await axios.delete('/api/login/delete', { data: deldata });
          console.log(mydel.data);
          setiscomplete(true)

        } catch (error) {
          console.log(error.message);

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
    </div>
  )
}

export default Delete
