import { useState } from 'react';
import './App.css';
import PostContainer from './components/postContainer';
import UserContainer from './components/userContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';

function App() {


  // RTK-query

  return (
    <div className="App">
      <div>
        <UserContainer />
      </div>
      <div>
        <PostContainer />
      </div>
    </div>
  );
}

export default App;
