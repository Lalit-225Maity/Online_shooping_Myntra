import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import Data from '../Datafile/Data'
const Navbar = ({ view, change }) => {
    const [data, setdata] = useState("");
    const mysubmit = () => {
        console.log(data);
        setdata("");


    }
    return (
        <div className="navbar">
            <div className="box">
                <NavLink to='/' ><img src='/Myntra-icon-logo.svg' alt="error" /></NavLink>
                <NavLink to='/' className={(e) => { return e.isActive ? "red" : "green" }} id='letter'>Men</NavLink>
                <NavLink to='/women' className={(e) => { return e.isActive ? "red" : "green" }} id='letter'>Women</NavLink>
                <NavLink to='/beauty' className={(e) => { return e.isActive ? "red" : "green" }} id='letter'>Beauty</NavLink>
                <NavLink to='/kids' className={(e) => { return e.isActive ? "red" : "green" }} id='letter'>Kids</NavLink>
                <NavLink to='/home' className={(e) => { return e.isActive ? "red" : "green" }} id='letter'>Home</NavLink>
                <div className="search">
                    <img src="/search (3).png" alt="Error" />
                    <input type="text" value={data} placeholder='search for product and brands'
                        onChange={(e) => {
                            setdata(e.target.value);
                        }}
                        onKeyDown={(e) => {

                            if (e.key === 'Enter') {
                                mysubmit();
                            }


                        }} />
                </div>
                <NavLink to='/data' className="profile">
                    <img src="/user.png" alt="Error" />
                    <p>Profile</p>
                </NavLink>
                <NavLink to='/wish' className="wishlist">
                    <img src="/heart.png" alt="Error" />
                    <p>Wishlist</p>
                </NavLink>
                <NavLink to='/signup' className="Login">
                    <img src="/user (1).png" alt="" />
                    {change ? <p>{view}</p> : <p>Signup</p>}
                </NavLink>
            </div>

        </div>

    )
}
export default Navbar
