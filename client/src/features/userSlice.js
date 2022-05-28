
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        auth: false,
    },
    reducers: {
        loggedIn: (state) => {
            state.auth = true
        },
        failed: (state) => {
            state.auth = false
        }
    }
})

export const { loggedIn, failed } = userSlice.actions

export default userSlice.reducer
