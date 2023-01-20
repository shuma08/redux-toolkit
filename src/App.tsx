import { useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  const { users, error, isLoading, count } = useAppSelector(state => state.userReducer)

  const dispatch = useAppDispatch()
  const [first, setfirst] = useState()

  const fetchAllUsers = () => dispatch(fetchUsers())
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>{fetchAllUsers()}}>Fetch User</button>
      <div>
        {/* {isLoading && <p>Loading...</p>} */}
        {error && <p>{error}</p>}
        {users.map(i => (
          <p>{i.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
