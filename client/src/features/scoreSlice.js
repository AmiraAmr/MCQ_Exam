
import { createSlice } from '@reduxjs/toolkit'

export const scoreSlice = createSlice({
    name: 'score',
    initialState: {
        score: 0,
        percentage: 0
    },
    reducers: {
        increment: (state) => {
            state.score +=1
        },
        calculateScore: (state) => {
            state.percentage = (state.score/7) * 100
        }
    }
})

export const { increment, calculateScore } = scoreSlice.actions

export default scoreSlice.reducer
