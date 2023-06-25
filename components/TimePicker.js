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
      setEndTime(0);
    } else {
      setStartTime(startTime - 1);
      setEndTime(endTime - 1);
    }
  };

  const handleNextButtonPress = () => {
    if (endTime === 24) {
      setStartTime(0);
      setEndTime(1);
    } else {
      setStartTime(startTime + 1);
      setEndTime(endTime + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Time Frame</Text>
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
            {startTime < 10 ? `0${startTime}` : startTime}:00 -{" "}
            {endTime < 10 ? `0${endTime}` : endTime}:00
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
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#EDF0F7",
    paddingBottom: 20,
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
    marginVertical: 20,
  },
  timeFrameBox: {
    flex: 4,
  },
  timeFrame: {
    textAlign: "center",
    fontSize: 20,
    color: theme.colors.primary,
  },
  descript: {
    marginTop: 6,
    textAlign: "center",
    color: theme.colors.text,
  },
  button: {
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.background,
  },
  buttonLabel: {
    fontSize: 17,
    color: theme.colors.primary,
  },
});
