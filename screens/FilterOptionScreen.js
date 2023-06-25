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
        <Button>Searching</Button>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  searchButtonContainer: {
    width: "100%",
    flex: 1,
  },
});
