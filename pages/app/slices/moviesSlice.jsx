import { createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

const initialState = {
  genre: [],
  urlType: "/",
  search: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setUrl: (state, action) => {
      //Router
      state.urlType = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setUrl, setSearch } = moviesSlice.actions;

export default moviesSlice.reducer;
