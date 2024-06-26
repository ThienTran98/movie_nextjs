import loadingSlice from "@/redux/loadingSlice";
import movieSlice from "@/redux/movieSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// ...

export const store = configureStore({
  reducer: combineReducers({
    listMoviesReducer: movieSlice,
    loadingReducer: loadingSlice,
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
