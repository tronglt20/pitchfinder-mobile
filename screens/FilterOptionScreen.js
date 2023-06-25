import React from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import CalenderPicker from "../components/CalenderPicker";
import TimePicker from "../components/TimePicker";
import PitchTypePicker from "../components/PitchTypePicker";
import { Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function FilterOptionScreen({ navigation }) {
  return (
    <Background>
      <CalenderPicker />
      <PitchTypePicker />
      <TimePicker />
      <View style={styles.searchButtonContainer}>
        <Button
          mode="contained"
          onPress={() => {
            // Handle button press action here
          }}
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
