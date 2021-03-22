import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchPlace = createAsyncThunk(
  'search/fetchPlaceStatus',
  async (location, thunkAPI) => {
    const response = await userAPI.fetch(location)
    return response.data
  }
)

export const pageSlice = createSlice({
  name: "search",
  initialState: {
    places: [],
    loading: false,
    error: false,
  },
  reducers: {
    clearData: (state) => {
      state.places = [];
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: {
    [fetchPlace.fulfilled]: (state, action) => {
      state.places.push(action.payload)
    }  
  }
});

export const {
  fetchSearchRequest,
  fetchSearchSuccess,
  fetchSearchFailure,
  clearData,
} = searchSlice.actions;

// Selectors
export const selectIsSearchLoading = (state) => state.search.loading;

export const selectIsSearchError = (state) => state.search.error;

export default searchSlice.reducer;
