function User({ id, name, email, username }){
    return <div style={{ border: `1px solid blue` }}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{username}</div>
        </div>
}

export default User;