import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';

export default function Login(){

    const [ userData, setUserData ] = useState({
        username: '',
        password: ''
    });

    const handleChange = event => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setUserData({
            username: event.target.username,
            password: event.target.password
       })
       console.log(userData);

        axios.post('http://localhost:5000/api/login', userData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
        console.log(userData);
    }



    return(
        <div>
            <form onSubmit={event => handleSubmit(event)}> 
                <h1>Hey Friend,</h1>
                <br></br>
                <h1>Enter your details...</h1>  
                <br/>
                <h1>Please(and thank you)!</h1>
                <br>
                </br><br></br>
                <label>Username:</label>
                <input 
                type="text"
                placeholder="Username:"
                onChange={event => handleChange(event)}
                name="username"
                />
                <label>Password:</label>
                <input 
                type="text"
                placeholder="Password:"
                onChange={event => handleChange(event)}
                name="password"
                /> <br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}