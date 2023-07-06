import { createSlice } from "@reduxjs/toolkit";

var dict = { 1: "Size 5", 2: "Size 7", 3: "Size 11" };

const pitchSlice = createSlice({
  name: "pitch",
  initialState: {
    selectedType: "",
    pitches: {},
  },
  reducers: {
    setPitches(state, actions) {
      state.pitches = actions.payload;
    },
    setSelectedPitchType(state, actions) {
      state.selectedType = dict[actions.payload];
    },
  },
});

export const PitchActions = pitchSlice.actions;
export default pitchSlice.reducer;
