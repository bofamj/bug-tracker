import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:7000/api/v1/issue";

//!get all issues from database
export const getAllIssues = createAsyncThunk(
  "issue/getAllIssues",
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

//! get user issues
export const getUserIssues = createAsyncThunk(
  "issue/getUserIssues",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().users.token;
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get(url + "/user", config);
      return res.data;
    } catch (error) {
      return error.response.data.masseg;
    }
  }
);

//!create a new issue

export const createIssue = createAsyncThunk(
  "issue/createIssue",
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().users.token;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const res = await axios.post(url, data, config);
      return res.data;
    } catch (error) {
      return error.response.data.masseg;
    }
  }
);

const initialState = {
  issues: [],
  userIssues: [],
  isLoading: false,
  isSuccss: false,
  meassage: "",
};

const issueSlice = createSlice({
  name: "issues",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllIssues.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllIssues.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.issues = payload;
      })
      .addCase(getAllIssues.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.meassage = payload;
      })
      .addCase(getUserIssues.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserIssues.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userIssues = payload;
      })
      .addCase(getUserIssues.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.meassage = payload;
      })
      .addCase(createIssue.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createIssue.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.issues.push(payload);
      })
      .addCase(createIssue.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.meassage = payload;
      });
  },
});

export default issueSlice.reducer;
