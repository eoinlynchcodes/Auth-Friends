import React from 'react';

export default function Login(){

    return(
        <div>
            <form>
                <label>Email:</label>
                <input 
                placeholder="Email:"

                />
                <label>Password:</label>
                <input 
                placeholder="Password:"
                />
                <button>Login</button>
            </form>
        </div>
    )
}