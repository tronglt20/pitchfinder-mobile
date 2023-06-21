import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../core/theme";
import { Button } from "react-native-paper";

export default function TimePicker() {
  const [startTime, setStartTime] = useState(19);
  const [endTime, setEndTime] = useState(20);
  const handlePrevButtonPress = () => {
    if (startTime === 0) {
      setStartTime(23);
      setEndTime(24);
      return;
    }
    setStartTime(startTime - 1);
    setEndTime(endTime - 1);
  };

  const handleNextButtonPress = () => {
    if (endTime === 24) {
      setStartTime(0);
      setEndTime(1);
      return;
    }

    setStartTime(startTime + 1);
    setEndTime(endTime + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Booking time frame</Text>
      <View style={styles.selectionBox}>
        <Button
          style={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={handlePrevButtonPress}
        >
          {"<"}
        </Button>
        <View style={styles.timeFrameBox}>
          <Text style={styles.timeFrame}>
            {startTime}:00 - {endTime}:00
          </Text>
          <Text style={styles.descript}>Rental will last 1 hour</Text>
        </View>
        <Button
          style={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={handleNextButtonPress}
        >
          {">"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  heading: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  selectionBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  timeFrameBox: {
    flex: 4,
  },
  timeFrame: {
    textAlign: "center",
    fontSize: 20,
  },
  descript: {
    marginTop: 6,
    textAlign: "center",
    color: "#9B9B9B",
  },
  button: {
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonLabel: {
    fontSize: 17,
    color: "black",
  },
});
