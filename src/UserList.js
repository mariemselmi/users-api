import React, {useState, useEffect} from 'react'
import axios from 'axios'

function UserList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {console.log(res) 
        setUsers(res.data)})
    }, [])


return (
    <div>
        <ul>
{users.map(user => <li key={user.id}>{user.username}</li>)}
        </ul>

    </div>
)
}
export default UserList;


