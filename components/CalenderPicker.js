import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { theme } from "../core/theme";

export default function CalendarPickerComponent({ onSelect }) {
  const minDate = new Date(); // Today

  const onDateChange = (date) => {
    onSelect(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Which date are you looking for?</Text>
      <View style={styles.calendar}>
        <CalendarPicker
          minDate={minDate}
          onDateChange={onDateChange}
          selectedDayColor={theme.colors.primary}
          selectedDayTextColor="#FFFFFF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#EDF0F7",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  calendar: {
    marginVertical: 20,
  },
});
