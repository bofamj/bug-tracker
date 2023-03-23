import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: "",
  isLoading: true,
  message: "",
  token: "",
};
const url = "http://localhost:7000/api/v1/register";
const singnUrl = "http://localhost:7000/api/v1/sign-in";

export const createUser = createAsyncThunk("users/createUser", async (data) => {
  try {
    const res = await axios.post(url, data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data.masseg;
  }
});
export const signInUser = createAsyncThunk(
  "users/signInUserr",
  async (data) => {
    try {
      const res = await axios.post(singnUrl, data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return error.response.data.masseg;
    }
  }
);

const usersSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //*create a new user
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        console.log(payload, state);
        state.users = payload;
        state.token = payload.token;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.message = payload;
      })
      //*sign in user
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = payload;
        // state.token = payload.token;
      })
      .addCase(signInUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.message = payload;
      });
  },
});

export default usersSlice.reducer;
