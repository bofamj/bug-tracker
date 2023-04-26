import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://bug-tracker-2.onrender.com/api/v1/message";

//!get all messages from database
export const getAllmessages = createAsyncThunk(
  "mesage/getAllmessages",
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
  "mesage/createmessage",
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
//!delete a  message from database
export const deleteMessage = createAsyncThunk(
  "mesage/deleteMessage",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().users.token;
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.delete(url + "/" + data, config);
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
        state.messages.push(payload);
      })
      .addCase(createmessage.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccss = false;
        state.meassage = payload;
      })
      //*delete a message
      .addCase(deleteMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMessage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccss = true;
        state.meassage = payload;
      })
      .addCase(deleteMessage.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccss = false;
        state.meassage = payload;
      });
  },
});

export const { findTicetMessages } = messageSlice.actions;
export default messageSlice.reducer;
