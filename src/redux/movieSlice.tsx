import { createSlice } from "@reduxjs/toolkit";

type modified = {
  time: string;
};
interface IsListMovie {
  modified: modified;
  name: string;
  origin_name: string;
  poster_url: string;
  slug: string;
  thumb_url: string;
  year: number;
  _id: string;
}

interface MovieState {
  listMovie: IsListMovie[];
}
const initialState: MovieState = {
  listMovie: [],
};

export const listMoviesSlice = createSlice({
  name: "listMovies",
  initialState,
  reducers: {
    setListMovie: (state, action) => {
      state.listMovie = action.payload;
    },
  },
});

export const { setListMovie } = listMoviesSlice.actions;
export default listMoviesSlice.reducer;
