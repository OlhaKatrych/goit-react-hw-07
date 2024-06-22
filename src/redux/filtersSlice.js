import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
      prepare(name) {
        return { payload: name };
      },
    },
  },
});

console.log(filtersSlice);

export const selectNameFilter = (state) => state.filters.name;

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
