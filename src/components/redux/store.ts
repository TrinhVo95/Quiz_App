import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./question_reducer";
import resultReducer from "./result_reducer";

//create store with reducer
export const store = configureStore({
  reducer: {
    questions: questionReducer,
    result: resultReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
