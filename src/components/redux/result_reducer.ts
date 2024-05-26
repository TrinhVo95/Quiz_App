import { createSlice } from "@reduxjs/toolkit";

interface ResultState {
  userId: string | null;
  result: any[]; // Update this to the appropriate type of your result array
}
export const resultReducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [], //store user result, index value
  } as ResultState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    resultAction: (state, action) => {
      state.result.push(action.payload);
    },
    updateAction: (state, action) => {
      const { trace, checked } = action.payload;
      state.result.fill(checked, trace, trace + 1);
    },
    resetResultAction: () => {
      return {
        userId: null,
        result: [],
      };
    },
  },
});

export const { setUserId, resultAction, resetResultAction, updateAction } =
  resultReducer.actions;
export default resultReducer.reducer;
