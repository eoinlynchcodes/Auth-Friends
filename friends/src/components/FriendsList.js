import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FriendsList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/friends')
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <div>
            {
                data.map((item, key) => {
                    console.log(item);
                    return item;
                })
            }
        </div>
    )
}