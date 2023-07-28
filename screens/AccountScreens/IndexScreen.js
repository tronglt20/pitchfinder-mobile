import React from "react";
import { View, Text, FlatList } from "react-native";

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
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Account Information
      </Text>
      <Text>Name: {accountInfo.name}</Text>
      <Text>Email: {accountInfo.email}</Text>

      <Text style={{ marginTop: 20, fontSize: 24, fontWeight: "bold" }}>
        Order History
      </Text>
      <FlatList
        data={orderHistoryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              paddingVertical: 10,
            }}
          >
            <Text>Order Date: {item.orderDate}</Text>
            <Text>Order Total: {item.orderTotal}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default IndexScreen;
