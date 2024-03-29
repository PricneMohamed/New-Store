import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  initialState: 0,
  name: "countSlice",
  reducers: {
    addMore: (state, action) => {
      return state +1;
    },
    removeOne: (state, action) => {
        return state - 1;
    },
  },
});
export const { addMore, removeOne } = countSlice.actions; // تم تحديث هنا
export default countSlice.reducer; // تم تحديث هنا
