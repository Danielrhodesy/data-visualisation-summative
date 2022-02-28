import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isNil, flatten } from "ramda";

const requestOptions = place => {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify(place)
  }
}

export const fetchPlaces = createAsyncThunk(
  "search/fetchPlaceStatus",
  async (place, { dispatch, rejectWithValue }) => {
    try {
      await fetch('http://localhost:3001/places', requestOptions(place))
        .then(response => response.json())
        .then(data => dispatch(storePlaces(data)))
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    places: [],
    loading: false,
    error: false,
    isDone: false
  },
  reducers: {
    storePlaces: (state, action) => {
      if (!isNil(action.payload)) {
        state.places = [...action.payload]
        flatten(state.places)
      }
      state.loading = false;
      state.error = false;
      state.isDone = true;
    }
  },
  extraReducers: {
    // Clear previous places
    [fetchPlaces.pending]: state => {
      state.places.length = 0;
      state.error = false;
      state.loading = true;
    },
    [fetchPlaces.fulfilled]: state => {
      state.error = false;
      state.loading = false;
      state.isDone = true;
    },
    [fetchPlaces.rejected]: state => {
      state.places.length = 0;
      state.loading = false;
      state.error = true;
    },
  }
});

// Actions
const { storePlaces } = searchSlice.actions;

// Selectors
export const selectIsSearchLoading = state => state.search.loading;
export const selectIsSearchError = state => state.search.error;
export const selectPlaceDetails = state => state.search.places;
export const selectIsRequestDone = state => state.search.isDone;

export default searchSlice.reducer;
