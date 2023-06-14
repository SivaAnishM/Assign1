import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
  name: "users",
  initialState: { value: { name: "", email: "", password: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state, action) => {
      state.value = { name: "", email: "", password: "" };
    },
  },
});

export const { login, logout } = userslice.actions;
export default userslice.reducer;
