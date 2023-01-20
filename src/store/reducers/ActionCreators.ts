import { IUser } from './../../models/IUser';
import axios from 'axios';
import { AppDispatch } from './../store';
import { userSlice } from './UserSlice';


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    const { usersFetching, usersFetchingSuccess, usersFetchingError } = userSlice.actions
    try {
        dispatch(usersFetching())
        const res = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
        dispatch(usersFetchingSuccess(res.data))
    } catch (error) {
        dispatch(usersFetchingError("error"))
        dispatch(usersFetchingError(error.message))
    }
};

