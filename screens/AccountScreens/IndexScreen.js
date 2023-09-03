import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import OrderHistory from "../../components/OrderHistory";
import Background from "../../components/Background";
import { useSelector } from "react-redux";
import { GetOrdersAPI } from "../../services/OrderService";

const IndexScreen = () => {
  const userData = useSelector((state) => state.auth.user);
  const [orderHistoryData, setOrderHistoryData] = useState(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    var request = GetOrdersAPI();
    request
      .then((response) => {
        if (response.status == 200) {
          setOrderHistoryData(response.data);
        } else {
          setIsAuth(false);
        }
      })
      .finally(() => {
        setShouldRender(true);
      });
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <Background>
      <View style={styles.container}>
        {/* User Information */}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userData.name.split("@")[0]}</Text>
          <Text style={styles.userEmail}>{userData.email}</Text>
        </View>

        {/* Order History */}
        <OrderHistory orderHistoryData={orderHistoryData} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 100,
    overflow: "hidden",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfo: {
    alignItems: "center",
    marginTop: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    color: "gray",
  },
});

export default IndexScreen;
