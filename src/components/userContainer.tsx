import React from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { fetchUsers } from '../store/reducers/ActionCreators'

const UserContainer = () => {
    //toolkit
    const { users, error, isLoading, count } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const fetchAllUsers = () => dispatch(fetchUsers())
    return (
        <div className='userContainer'>
            <button onClick={() => { fetchAllUsers() }}>Fetch User</button>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {users.map(i => (
                <p key={i.id} className='user'>{i.name}</p>
            ))}
        </div>

    )
}

export default UserContainer