import React, { useState } from "react";
import axios from "axios";
import './Signup.css'
import { NavLink } from "react-router-dom";

const Signup = ({ setview, setchange }) => {

    const [process, setProcess] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [name, setName] = useState("");

    const sub = async (e) => {
        e.preventDefault();


        if (password !== confirm) {
            setProcess("Passwords do not match");
            return;
        }


        const data = { name, password };

        try {

            const response = await axios.post('/api/login', data);
            setProcess(response.data.message || "Signup successful!");
            localStorage.setItem("myuser", JSON.stringify(data.name));
            setchange(true);
            setName("");
            setPassword("");
            setConfirm("");
            setview(data.name);
        } catch (error) {
            setProcess(error.response?.data?.message || "Signup failed");
            setchange(false);

        }
    };


    return (
        <div className="signup">
            <form onSubmit={sub} >
                <label>Enter Your Name:</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required

                />

                <label>Enter Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label>Confirm Password:</label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                />

                <input type="submit" value="Submit" />
            </form>

            {process && <p style={{ color: "red" }}>{process}</p>}

            <NavLink to='/signup/update'><p>Update Password</p></NavLink>
            <NavLink to='/signup/delete'><p>Delete Account</p></NavLink>

        </div>
    );
};

export default Signup;


