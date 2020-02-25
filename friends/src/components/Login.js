import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';

export default function Login(){

    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    });

    const handleChange = event => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };

    function handleSubmit(event){
        debugger
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
            <form> 
                <h1>Hey Friend,</h1>
                <br></br>
                <h1>Enter your details...</h1>  
                <br/>
                <h1>Please(and thank you)!</h1>
                <br>
                </br><br></br>
                <label>Email:</label>
                <input 
                type="text"
                placeholder="Email:"
                onChange={event=> handleChange(event)}
                name="email"
                />
                <label>Password:</label>
                <input 
                type="text"
                placeholder="Password:"
                onChange={event => handleChange(event)}
                name="password"
                /> <br></br>
                <button onClick={event => handleSubmit(event)}>Login</button>
            </form>
        </div>
    )
}