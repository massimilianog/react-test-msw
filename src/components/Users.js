import {useState, useEffect} from 'react';
import {usersApi} from '../api';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadUsers = () => {
        setLoading(true)
        usersApi.get().then((_users) => {
            setUsers(_users);
        }).finally(() => setLoading(false));
    }

    useEffect(() => {
        loadUsers();
    }, [])

    const handleRefresh = () => {
        loadUsers();
    }

    return (
        <div>
            <p>Users</p>
            <div style={{display: "inline-block"}}>
                <button disabled={loading} onClick={handleRefresh}>Refresh</button>
                {loading && (<> loading...</>)}
            </div>
            <div>
                {!loading && (<ul>
                    {users.map(user =>
                        <li key={user.id}>{`id: ${user.id}, name: ${user.name}`}</li>
                    )}
                </ul>
                )}
            </div>
        </div>
    )
}

export default Users;