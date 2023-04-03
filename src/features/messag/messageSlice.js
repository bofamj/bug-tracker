import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:7000/api/v1/message";
//!get all messages from database
export const getAllmessages = createAsyncThunk(
  "issue/getAllmessages",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().users.token;
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get(url, config);
      return res.data;
    } catch (error) {
      return error.response.data.masseg;
    }
  }
);

const initialState = {
  messages: [],
  isLoading: false,
  isSuccss: false,
  meassage: "",
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  extraReducers: (builder) => {
    builder
      //*get all messages
      .addCase(getAllmessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllmessages.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccss = true;
        state.messages.push(payload);
      })
      .addCase(getAllmessages.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccss = false;
        state.meassage = payload;
      });
  },
});
export default messageSlice.reducer;
