import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import issueReducer from "./features/issue/issueSlice";
import messagesReducer from "./features/messag/messageSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    issues: issueReducer,
    messages: messagesReducer,
  },
});
