import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:7000/api/v1/issue";

//!get all issues from database
export const getAllIssues = createAsyncThunk("issue/getAllIssues", async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return error.response.data.masseg;
  }
});

const initialState = {
  issues: [],
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
      });
  },
});

export default issueSlice.reducer;
