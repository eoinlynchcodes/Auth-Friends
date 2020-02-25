import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import uuid from 'uuid';

export default function AddFriend(){
    const URL = 'http://localhost:5000';
    const [ friendData, setFriendData ] = useState({
        id: uuid(),
        name: '',
        age: null, 
        email: '',
    })

    const changeHandler = event => {
        setFriendData({
            ...friendData,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = event => {
        event.preventDefault();
        setFriendData({
            id: uuid(),
            name: event.target.name,
            age: event.target.age,
            email: event.target.email
        })
        axios.post('http://localhost:5000/api/friends', friendData)
        .then(response => {
            console.log(response);
        })  
        .catch(error => {
            console.log(error);
        })
    }


    return(
        <div>
            <h1>Congrats, you've logged in successfully</h1>

            <form onSubmit={event => submitHandler(event)}>
                <label>Name:</label>
                <input 
                placeholder="Name:"
                type="text"
                name="name"
                onChange={event => changeHandler(event)}
                />

                <label>Age:</label>
                <input 
                placeholder="Age:"
                type="text"
                name="age"
                onChange={event => changeHandler(event)}
                />

                <label>Email:</label>
                <input 
                placeholder="Email:"
                type="text"
                name="email"
                onChange={event => changeHandler(event)}
                />
                <br></br>
                <button type="submit">Add Friend</button>
            </form>
        </div>
    )
}