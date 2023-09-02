import React from "react";
import { View, StyleSheet } from "react-native";
import OrderHistoryScreen from "./OrderHistoryScreen";
import Background from "../../components/Background";
const IndexScreen = () => {
  const orderHistoryData = [
    {
      id: "1",
      orderDate: "2023-07-28",
      orderTotal: "$50",
      status: "Delivered",
    },
    {
      id: "2",
      orderDate: "2023-07-25",
      orderTotal: "$30",
      status: "Pending",
    },
  ];

  const accountInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: "https://example.com/avatar.jpg", // Replace with the actual URL of the user's avatar
  };

  return (
    <Background>
      <View style={styles.container}>
        {/* User Avatar */}

        {/* Order History */}
        <OrderHistoryScreen orderHistoryData={orderHistoryData} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default IndexScreen;
