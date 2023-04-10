import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:7000/api/v1/message";
const url2 = "http://localhost:7000/api/v1/message/ticket";
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
//!creat a  message from database
export const createmessage = createAsyncThunk(
  "issue/createmessage",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().users.token;
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.post(url, data, config);

      return res.data;
    } catch (error) {
      return error.response.data.masseg;
    }
  }
);

const initialState = {
  messages: [],
  ticketMessages: [],
  isLoading: false,
  isSuccss: false,
  meassage: "",
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    findTicetMessages: (state, { payload }) => {
      state.ticketMessages = state.messages.filter(
        (message) => message.belongTo == payload
      );
      state.isSuccss = true;
    },
  },
  extraReducers: (builder) => {
    builder
      //*get all messages
      .addCase(getAllmessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllmessages.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccss = true;
        state.messages = payload;
      })
      .addCase(getAllmessages.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccss = false;
        state.messages.push(payload);
      })
      //*create a message
      .addCase(createmessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createmessage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccss = true;
        state.messages = payload;
      })
      .addCase(createmessage.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccss = false;
        state.meassage = payload;
      });
  },
});

export const { findTicetMessages } = messageSlice.actions;
export default messageSlice.reducer;
