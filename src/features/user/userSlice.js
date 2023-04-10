import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userToken = JSON.parse(localStorage.getItem("userToken"));
const user = localStorage.getItem("user");
const user2 = JSON.parse(user);

const initialState = {
  users: "",
  allUsers: [],
  user: user2 ? user2 : null,
  isLoading: true,
  message: "",
  token: userToken ? userToken : null,
};
const url = "http://localhost:7000/api/v1";

//!register a user
export const createUser = createAsyncThunk("users/createUser", async (data) => {
  try {
    const res = await axios.post(url + "/register", data);
    if (res.data.token) {
      localStorage.setItem("userToken", JSON.stringify(res.data.token));
    }
    return res.data;
  } catch (error) {
    return error.response.data.masseg;
  }
});

//!login a user
export const signInUser = createAsyncThunk(
  "users/signInUserr",
  async (data) => {
    try {
      const res = await axios.post(url + "/sign-in", data);

      if (res.data.token) {
        localStorage.setItem("userToken", JSON.stringify(res.data.token));
      }
      localStorage.setItem("user", JSON.stringify(res.data));

      return res.data;
    } catch (error) {
      return error.response.data.masseg;
    }
  }
);

//!signOut user
export const signOut = createAsyncThunk("users/signOut", () => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("user");
});

//!git all users
export const gitAllUsers = createAsyncThunk("users/gitAllUsers", async () => {
  try {
    const res = await axios.get(url + "/user");
    return res.data;
  } catch (error) {
    return error.response.data.masseg;
  }
});
//!git  user
export const gitUser = createAsyncThunk("users/gitUser", async (data) => {
  console.log("🚀 ~ file: userSlice.js:67 ~ gitUser ~ data:", data);
  try {
    const res = await axios.get(url + "/user/" + data);
    return res.data;
  } catch (error) {
    return error.response.data.masseg;
  }
});

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
        state.user = payload;
        state.token = payload.token;
      })
      .addCase(signInUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.message = payload;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.isLoading = false;
        state.users = null;
        state.token = null;
      })
      //*get all  users
      .addCase(gitAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(gitAllUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allUsers = payload;
      })
      .addCase(gitAllUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.message = payload;
      })
      //*get  user
      .addCase(gitUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(gitUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = payload;
      })
      .addCase(gitUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.message = payload;
      });
  },
});

export default usersSlice.reducer;
