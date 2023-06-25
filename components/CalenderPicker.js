import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { theme } from "../core/theme";

export default class CalenderPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const minDate = new Date(); // Today
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Which date are you looking for?</Text>
        <View style={styles.calendar}>
          <CalendarPicker
            minDate={minDate}
            onDateChange={this.onDateChange}
            selectedDayColor={theme.colors.primary}
            selectedDayTextColor="#FFFFFF"
          />
        </View>
      </View>
    );
  }
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
