import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: true,
  message: "",
};
const url = "http://localhost:7000/api/v1/sign-in";
export const createUser = createAsyncThunk(
  "users/createUser",
  async (user, thunkAPI) => {
    try {
      const users = await axios.post(url, user);
      return users.data;
    } catch (error) {
      return error.response.data.masseg;
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [createUser.pending]: (state) => {
      state.isLoading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      console.log(action.payload.token);
      state.users = action.payload;
      state.message = !action.payload.token ? action.payload : "";
      state.isLoading = false;
    },
    [createUser.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
    },
  },
});

export default usersSlice.reducer;
