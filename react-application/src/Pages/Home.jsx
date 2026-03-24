import React, { useEffect, useState } from 'react';
import User from '../components/User.jsx'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [users, setUsers] = useState([])

    async function fetchUsers() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {
        setTimeout(() => {
            fetchUsers();
        }, 500);
    }, []);
    const pixels = "1px";

        return (
        <>
        {users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
       <User key={user.id} id={user.id} name={user.name}  email={user.email} username={user.username}
       />
       </Link>
    ))}
    </>
    );
}

export default Home; 