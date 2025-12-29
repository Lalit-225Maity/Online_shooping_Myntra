 import React, { useState } from 'react'
 import axios from 'axios'
 import './Update.css'
 import { NavLink } from 'react-router-dom'
 const Update = () => {
  const [name, setname] = useState();
  const [newpass, setnewpass] = useState();
  const[currentpass,setcurrentpass]=useState();
  const mysubmit=async(e)=>{
    e.preventDefault();
    const newdata={name,newpass,currentpass};
    const resp=await axios.put('/api/login/update',newdata);
    console.log(resp.data);
    
  }
   return (
     <div className='update'>
       <form onSubmit={mysubmit}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <input type="password" placeholder='Enter old password' value={currentpass} onChange={(e)=>{setcurrentpass(e.target.value)}}  />
        <input type="password" placeholder='Enter New password' value={newpass} onChange={(e)=>{setnewpass(e.target.value)}} />
        <input type="submit" value="Submit" />
       </form>
       <NavLink to='/signup/delete'><p>Delete Account</p></NavLink>
     </div>
   )
 }
 
 export default Update
 