import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { service } from "../utils/utils";
import { map, isNil } from "ramda";

// Fields for the Place Details search
const fields = [
  "name",
  "formatted_address",
  "formatted_phone_number",
  "website"
];

// Use place ID to get details
const fetchPlaceDetails = createAsyncThunk(
  "search/fetchPlaceDetailsStatus",
  async (placeId, { dispatch, rejectWithValue }) => {
    try {
      await service.getDetails(
        {
          placeId: placeId,
          fields
        },
        response => dispatch(storePlaceDetails(response))
      );
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// Fetch all places based on mental health Text Search
export const fetchPlaces = createAsyncThunk(
  "search/fetchPlaceStatus",
  async (location, { dispatch, rejectWithValue }) => {
    try {
      await service.textSearch(
        {
          // Bias results towards NZ
          radius: 1000000,
          // Required: Set initial location to Wellington
          location: {
            lat: -41.228241,
            lng: 174.90512
          },
          query: `mental health in ${location}`
        },
        // Get place details for each returned place
        map(response => dispatch(fetchPlaceDetails(response.place_id)))
      );
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
    storePlaceDetails: (state, action) => {
      if (!isNil(action.payload)) {
        state.places.push(action.payload);
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
      state.loading = true;
    },
    [fetchPlaces.rejected]: state => {
      state.places.length = 0;
      state.loading = false;
      state.error = true;
    },
    [fetchPlaceDetails.pending]: state => {
      state.error = false;
      state.loading = true;
    },
    [fetchPlaceDetails.fulfilled]: state => {
      state.error = false;
      state.loading = true;
    },
    [fetchPlaceDetails.rejected]: state => {
      state.places.length = 0;
      state.loading = false;
      state.error = true;
    }
  }
});

// Actions
const { storePlaceDetails } = searchSlice.actions;

// Selectors
export const selectIsSearchLoading = state => state.search.loading;
export const selectIsSearchError = state => state.search.error;
export const selectPlaceDetails = state => state.search.places;
export const selectIsRequestDone = state => state.search.isDone;

export default searchSlice.reducer;
