import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:7000/api/v1/issue";
//const config = {headers: { Authorization: `Bearer ${token}` } }
//!get all issues from database
export const getAllIssues = createAsyncThunk("issue/getAllIssues", async () => {
  try {
    // const token = thunkAPI.getState().users.users.token;
    /* console.log(token);
      const config = { headers: { Authorization: `Bearer ${token}` } }; */
    const res = await axios.get(url);
    console.log(res.data);
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
