import { fetchUsers } from './ActionCreators';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser"

interface UserState {
    users: IUser[],
    isLoading: boolean,
    error: string,
    count: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0

};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // usersFetching(state) {
        //     state.isLoading = true
        // },
        // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false
        //     state.error = ''
        //     state.users = action.payload
        // },
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false
        //     state.error = action.payload
        // },
    },
    // toolkit Thunk
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
});


export default userSlice.reducer;
