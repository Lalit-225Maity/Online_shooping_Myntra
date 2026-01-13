import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Data.css';

const Data = ({ view }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset({
      username: view
    })
  }, [view])
  useEffect(() => {
    const saveditems = localStorage.getItem("items");
    if (saveditems) {
      const results = JSON.parse(saveditems);
      reset(results)
    }
  }, [])

  const Tick = (data) => {
    localStorage.setItem("items", JSON.stringify({ ...data }));

  }
  const logout = () => {
    localStorage.removeItem("items");
    localStorage.removeItem("myuser")
  }

  return (
    <div className='data'>
      <form onSubmit={handleSubmit(Tick)} id='form'>
        <div className="formdata">
          <label>User Name:</label>
          <input type="text" placeholder="Enter your username" {...register("username")} />
        </div>
        <div className="formdata">
          <label>Write your Delivered Address:</label>
          <input type="text" placeholder='Enter your Address' {...register("address")} />
        </div>
        <div className="formdata">
          <label>Enter your Email:</label>
          <input type="email" placeholder='example@domain.com' {...register("email")} />
        </div>
        <div className="formdata">
          <label>Enter Your Phone Number:</label>
          <input type="number" placeholder='Phone Number' {...register("phonenumber")} />
        </div>
        <div className="select">
          <label>Gender:</label>
          <input type="radio" value="Male" id='male' {...register("gender")} />
          <label htmlFor="male">Male</label>
          <input type="radio" value="Female" id='female' {...register("gender")} />
          <label htmlFor="female">Female</label>
        </div>
        <input type="submit" value="save" id='save' />
        <button type="button" onClick={logout} className="logout">
          Log out
        </button>
      </form>

    </div>
  );
};

export default Data;