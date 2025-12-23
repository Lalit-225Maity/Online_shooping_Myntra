import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './Data.css'
// import { useLocation } from 'react-router-dom'
 
const Data = ({view}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const saveditem=localStorage.getItem("userData");
    if(saveditem){
       reset(JSON.parse(saveditem));
    }
  }, [reset])
  
  const Tick = (data) => {
    const finalData={
      ...data
    };
    console.log(data);
     localStorage.setItem("userData", JSON.stringify(finalData));

  }
  return (
    <div className='data'>
      <form onSubmit={handleSubmit(Tick)} id='form'>
         <div className="formdata">
          <label> User Name: </label>
          <input type="text"  value={view||""}  {...register("username")}/>
        </div>
        <div className="formdata">
          <label>Write your Delivered Adress : </label>
          <input type="text" placeholder='Enter your Address' {...register("address")} />
        </div>
        <div className="formdata">

          <label>Enter your Email : </label>
          <input type="email" placeholder='example@domain.com' {...register("email")} />
        </div>
        <div className="formdata">
          <label>Enter Your Phone Number : </label>
          <input type="number" placeholder='Phone Number' {...register("phonenumber")} />
        </div>
        <div className="select">
        <label>Gender : </label>
          <input type="radio" name="gender" value="Male" id='male' {...register("male")} />
          <label for="male">Male</label>

          <input type="radio" name="gender" value="Female" id='female' {...register("female")} />
          <label for="female">Female</label>
        </div>
        <input type="submit" value="save" id='save' />

      </form>
    </div>
  )
}

export default Data
