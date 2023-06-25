import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../core/theme";

export default function PitchTypePicker() {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Type</Text>
      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[
            styles.typeOption,
            selectedSize === "Size 5" && styles.selectedOption,
          ]}
          onPress={() => handleSizeSelection("Size 5")}
        >
          <Text
            style={[
              styles.optionText,
              selectedSize === "Size 5" && styles.selectedText,
            ]}
          >
            Size 5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeOption,
            selectedSize === "Size 7" && styles.selectedOption,
          ]}
          onPress={() => handleSizeSelection("Size 7")}
        >
          <Text
            style={[
              styles.optionText,
              selectedSize === "Size 7" && styles.selectedText,
            ]}
          >
            Size 7
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeOption,
            selectedSize === "Size 11" && styles.selectedOption,
          ]}
          onPress={() => handleSizeSelection("Size 11")}
        >
          <Text
            style={[
              styles.optionText,
              selectedSize === "Size 11" && styles.selectedText,
            ]}
          >
            Size 11
          </Text>
        </TouchableOpacity>
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
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  typeContainer: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  typeOption: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    padding: 10,
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: theme.colors.primary,
  },
  optionText: {
    fontSize: 16,
    color: theme.colors.primary,
  },
  selectedText: {
    color: theme.colors.surface,
  },
});
