import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null
    },
    reducers: {
        setReduxUser: (state, action) => {
            console.log("Changed form Redux");
            state.value = action.payload
        }
    }
})

export const { setReduxUser } = userSlice.actions
export default userSlice.reducer