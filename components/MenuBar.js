import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MenuBar() {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState("BookingContainer"); // Default selected item

  const handleMenuItemPress = (itemName) => {
    setSelectedItem(itemName);
    navigation.navigate(itemName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.menuItem,
          selectedItem === "BookingContainer" && styles.selectedItem,
        ]}
        onPress={() => handleMenuItemPress("BookingContainer")}
      >
        <Text
          style={[
            styles.menuText,
            selectedItem === "BookingContainer" && styles.selectedText,
          ]}
        >
          Booking
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.menuItem,
          selectedItem === "AccountContainer" && styles.selectedItem,
        ]}
        onPress={() => handleMenuItemPress("AccountContainer")}
      >
        <Text
          style={[
            styles.menuText,
            selectedItem === "AccountContainer" && styles.selectedText,
          ]}
        >
          Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "gray",
    backgroundColor: "white",
    paddingBottom: 20,
  },
  menuItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
    color: "black",
  },
  selectedItem: {
    backgroundColor: "#e1e1e1",
  },
  selectedText: {
    color: "blue",
  },
});
