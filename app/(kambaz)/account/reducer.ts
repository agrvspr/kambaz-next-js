import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("currentUser") || "null")
    : null,
};

// Updated the code to save the user in local storage on login, since it felt weird to go from login to dashboard and when going back to login, no profile.
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload; // Save user in state
      if (typeof window !== "undefined") {
        if (action.payload) {
          localStorage.setItem("currentUser", JSON.stringify(action.payload));
        } else {
          localStorage.removeItem("currentUser"); //Clear User stored on logout
        }
      }
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;