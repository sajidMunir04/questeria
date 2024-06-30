import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./slices/authenticationSlice";

const rootReducer = combineReducers({
    authenticationState: authenticationSlice   
})

export const store = configureStore({
    reducer : rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;