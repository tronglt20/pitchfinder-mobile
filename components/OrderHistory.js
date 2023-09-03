import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const OrderHistory = ({ orderHistoryData }) => {
  console.log(orderHistoryData);
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Order History</Text>
      <FlatList
        data={orderHistoryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text>Order Date: {item.orderDate}</Text>
            <Text>Order Total: {item.orderTotal}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingVertical: 10,
  },
});

export default OrderHistory;
