import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userToken = JSON.parse(localStorage.getItem("userToken"));

const initialState = {
  users: "",
  isLoading: true,
  message: "",
  token: userToken ? userToken : null,
};
const url = "http://localhost:7000/api/v1/register";
const singnUrl = "http://localhost:7000/api/v1/sign-in";

export const createUser = createAsyncThunk("users/createUser", async (data) => {
  try {
    const res = await axios.post(url, data);
    if (res.data.token) {
      localStorage.setItem("userToken", JSON.stringify(res.data.token));
    }
    return res.data;
  } catch (error) {
    return error.response.data.masseg;
  }
});
export const signInUser = createAsyncThunk(
  "users/signInUserr",
  async (data) => {
    try {
      const res = await axios.post(singnUrl, data);

      if (res.data.token) {
        localStorage.setItem("userToken", JSON.stringify(res.data.token));
      }
      return res.data;
    } catch (error) {
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
        state.users = payload;
        state.token = payload.token;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, { payload }) => {
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
        state.token = payload.token;
      })
      .addCase(signInUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.message = payload;
      });
  },
});

export default usersSlice.reducer;
