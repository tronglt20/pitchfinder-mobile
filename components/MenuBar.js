import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MenuBar() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "gray",
      }}
    >
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("BookingContainer");
        }}
      >
        <Text>Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("AccountContainer");
        }}
      >
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
}
