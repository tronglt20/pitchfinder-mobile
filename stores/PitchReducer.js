import { createSlice } from "@reduxjs/toolkit";

var dict = { 1: "Size 5", 2: "Size 7", 3: "Size 11" };

const pitchSlice = createSlice({
  name: "pitch",
  initialState: {
    selectedType: "",
    pitches: {},
    filterState: {
      selectedDate: null,
      selectedTime: {
        startTime: null,
        endTime: null,
      },
    },
  },
  reducers: {
    setPitches(state, actions) {
      state.pitches = actions.payload;
    },
    setSelectedPitchType(state, actions) {
      state.selectedType = dict[actions.payload];
    },
    setSelectedDate(state, actions) {
      state.filterState.selectedDate = actions.payload;
    },
    setSelectedTime(state, actions) {
      state.filterState.selectedTime = actions.payload;
    },
  },
});

export const PitchActions = pitchSlice.actions;
export default pitchSlice.reducer;
