import React, { useState } from "react";
import Background from "../../components/Background";
import CalenderPicker from "../../components/CalenderPicker";
import TimePicker from "../../components/TimePicker";
import PitchTypePicker from "../../components/PitchTypePicker";
import { useDispatch } from "react-redux";
import { Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { FilterStoresAPI } from "../../services/PitchService";
import { PitchActions } from "../../stores/PitchReducer";

export default function FilterOptionScreen({ navigation }) {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState({
    startTime: null,
    endTime: null,
  });
  const [selectedPitchType, setSelectedPitchType] = useState(null);

  const handleSearch = async () => {
    var response = await FilterStoresAPI(
      selectedPitchType,
      `${selectedTime.startTime}:00:00`,
      `${selectedTime.endTime}:00:00`,
      selectedDate
    );

    if (response.status == 200) {
      dispatch(PitchActions.setPitches(response.data));
      dispatch(PitchActions.setSelectedPitchType(selectedPitchType));
      dispatch(PitchActions.setSelectedDate(selectedDate));
      dispatch(PitchActions.setSelectedTime(selectedTime));

      navigation.navigate("PitchsScreen");
    } else {
      console.log(`error`);
    }
  };
  return (
    <Background>
      <CalenderPicker onSelect={setSelectedDate} />
      <PitchTypePicker onSelect={setSelectedPitchType} />
      <TimePicker onSelect={setSelectedTime} />
      <View style={styles.searchButtonContainer}>
        <Button
          mode="contained"
          onPress={handleSearch}
          style={styles.searchButton}
          labelStyle={styles.searchButtonLabel}
        >
          Search
        </Button>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  searchButtonContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 14,
    paddingHorizontal: 50,
  },
  searchButton: {
    borderRadius: 24,
  },
  searchButtonLabel: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 6,
  },
});
