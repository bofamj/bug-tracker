import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: "",
  isLoading: true,
  message: "",
};
const url = "http://localhost:7000/api/v1/sign-in";
export const createUser = createAsyncThunk(
  "users/createUser",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(url, data);
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
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        console.log(payload, state);
        state.users = payload;
        state.message = !payload.token ? payload : "";
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
      });
  },
});

export default usersSlice.reducer;
