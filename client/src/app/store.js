import { configureStore } from "@reduxjs/toolkit"
import scoreReducer from '../features/scoreSlice'
import userSlice from "../features/userSlice"

export default configureStore({
  reducer: {
      score: scoreReducer,
      user: userSlice
  }
})