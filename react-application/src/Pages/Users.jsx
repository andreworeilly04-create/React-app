import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users () {
const { username } = useParams()
const [user, setUser] = useState({})

async function fetchUser(){
const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${username}`)
setUser(data)
}

useEffect(() =>{
    fetchUser()
}, [])

    return (
        <>
        <Link to="/">Go Back</Link>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.username}</h1>
        </>
    )
}

export default Users;