import React, { useState } from "react";
import Background from "../components/Background";
import CalenderPicker from "../components/CalenderPicker";
import TimePicker from "../components/TimePicker";
import PitchTypePicker from "../components/PitchTypePicker";
import { Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { FilterStoresAPI } from "../services/PitchService";

export default function FilterOptionScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState({
    startTime: null,
    endTime: null,
  });
  const [selectedPitchType, setSelectedPitchType] = useState(null);

  const handleSearch = async () => {
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
    console.log("Selected Pitch Type:", selectedPitchType);

    var response = await FilterStoresAPI(
      selectedPitchType,
      selectedDate.startTime,
      selectedDate.endTime,
      selectedDate
    );

    if (response.status == 200) {
      console.log(response);
      // navigation.navigate("PitchsScreen", response);
      console.log(`success: ${response}`);
    } else {
      console.log(`error: ${response}`);
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
    marginBottom: 36,
    paddingHorizontal: 16,
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
