import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import Background from "../components/Background";
import { useSelector } from "react-redux";
import { ConfirmPaymentAPI } from "../services/OrderService";
import { ConsumePaymentResultAPI } from "../services/PaymentService";
import * as Linking from "expo-linking";

export default function OrderConfirmScreen({ navigation, route }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    Linking.addEventListener("url", handleDeeplink);
  }, []);

  function handleDeeplink(event) {
    let data = Linking.parse(event.url);
    setData(data);
    //ConsumePaymentResultAPI(data.orderId, data.message, data.resultCode);
  }

  const { pitch } = route.params;
  const selectedType = useSelector((state) => state.pitch.selectedType);

  const goBack = () => {
    navigation.navigate("PitchDetailScreen", { pitch });
  };
  const handlePayment = async () => {
    var response = await ConfirmPaymentAPI();
    Linking.openURL(response.data.payUrl);
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.headingText}>Order Confirmation</Text>
        <Text style={styles.headingDes}>
          Please confirm your booking information below. You will not be able to
          make changes once your booking is confirmed!
        </Text>
        <Text>
          {data
            ? JSON.stringify(data.orderId, data.message, data.resultCode)
            : "App not open from deeplink"}
        </Text>
        <Card style={styles.card}>
          <Text style={styles.storeName}>{pitch.storeName}</Text>
          <Text style={styles.pitchName}>({pitch.pitchName})</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Address</Text>
            <Text style={styles.infoValue}>{pitch.address}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Type</Text>
            <Text style={styles.infoValue}>{selectedType}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>Duration</Text>
              <Text style={styles.infoValue}>19:00 - 20:00</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.infoTitle}>Price</Text>
              <Text style={styles.infoValue}>{pitch.price}$</Text>
            </View>
          </View>
        </Card>
        <View style={styles.buttonContainer}>
          <Button mode="outlined" onPress={goBack} style={styles.button}>
            Back
          </Button>
          <Button
            mode="contained"
            onPress={handlePayment}
            style={styles.button}
          >
            Payment
          </Button>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
  },
  headingDes: {
    lineHeight: 22,
    marginBottom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  storeName: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  pitchName: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  infoValue: {
    fontSize: 15,
    marginTop: 5,
  },
  priceContainer: {
    marginTop: 20,
    marginLeft: 70,
  },
  row: {
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});
