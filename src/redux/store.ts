/* eslint-disable no-restricted-globals */
import { configureStore } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import authReducer, { setLoginStatus } from "../features/auth/authSlice";
import subredditReducer from "../features/subreddit/subredditSlice";
import postReducer from "../features/post/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    subreddit: subredditReducer,
    post: postReducer,
  },
});

console.log('Hello sachin this side');
export function authStateObserver(user: User | null) {
  if (user) {
    //console.log(user);
    store.dispatch(setLoginStatus(true));
  } else {
    store.dispatch(setLoginStatus(false));
  }
}


console.log(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
