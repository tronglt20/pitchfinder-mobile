import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MenuBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("BookingContainer");
        }}
      >
        <Text style={styles.menuText}>Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("AccountContainer");
        }}
      >
        <Text style={styles.menuText}>Account</Text>
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
});
