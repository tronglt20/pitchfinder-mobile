import { createSlice } from "@reduxjs/toolkit";

const pitchSlice = createSlice({
  name: "pitch",
  initialState: {
    pitches: {},
  },
  reducers: {
    setPitches(state, actions) {
      state.pitches = actions.payload;
    },
  },
});

export const PitchActions = pitchSlice.actions;
export default pitchSlice.reducer;
