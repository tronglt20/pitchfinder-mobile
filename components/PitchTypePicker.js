import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../core/theme";

export default function PitchTypePicker({ onSelect }) {
  const [selectedSize, setSelectedSize] = useState("");
  var dict = { "Size 5": 1, "Size 7": 2, "Size 11": 3 };
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    onSelect(dict[size]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pitch Type</Text>
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
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: theme.colors.primary,
  },
  optionText: {
    fontSize: 14,
    color: theme.colors.primary,
  },
  selectedText: {
    color: theme.colors.surface,
  },
});
