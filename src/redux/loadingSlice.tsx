import { createSlice } from "@reduxjs/toolkit";

type IsLoading = {
  isLoading: boolean;
};
const initialState: IsLoading = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoadingOn: (state, payload) => {
      state.isLoading = payload.payload;
    },
    setLoadingOff: (state, payload) => {
      state.isLoading = payload.payload;
    },
  },
});
export const { setLoadingOn, setLoadingOff } = loadingSlice.actions;
export default loadingSlice.reducer;
