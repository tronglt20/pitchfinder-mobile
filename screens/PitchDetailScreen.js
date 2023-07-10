import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { OrderAPI } from "../services/OrderService";

export default function PitchDetailScreen({ navigation, route }) {
  const { pitch } = route.params;

  const goBack = () => {
    navigation.navigate("PitchsScreen");
  };

  const orderHandler = async () => {
    var response = await OrderAPI(pitch.storeId, pitch.price, "");
    if (response.status == 200) {
      console.log(response.data);
      navigation.navigate("OrderConfirmScreen", { pitch: response.data });
    }
  };

  return (
    <Background>
      <BackButton goBack={goBack} />
      <Image
        source={require("../assets/pitchImage.png")}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <View style={styles.headingBox}>
          <Text style={styles.pitchNameStyle}>{pitch.name}</Text>
          <Text style={styles.pitchTypeStyle}>{pitch.type}</Text>
        </View>
        <View style={styles.bodyBox}>
          <View style={styles.row}>
            <Icon name="map-marker" style={styles.icon} />
            <View style={styles.column} marginBottom={20}>
              <Text style={styles.textH2}>Address</Text>
              <Text style={styles.textLight}>{pitch.address}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Icon name="phone" style={styles.icon} />
            <View style={styles.column}>
              <Text style={styles.textH2}>Phone number</Text>
              <Text style={styles.textLight}>{pitch.phone}</Text>
            </View>
          </View>
        </View>
        <View style={styles.rootBox}>
          <View style={styles.ratingContainer}>
            <Icon
              name="star"
              size={18}
              color="#333"
              style={styles.ratingIcon}
            />
            <Text style={styles.ratingText}>{`${pitch.rating}/5`}</Text>
          </View>
          {/* <ScrollView>
            <Card key={pitch.id} style={styles.card}>
              <Text>HL</Text>
            </Card>
          </ScrollView> */}
        </View>
      </View>
      <View style={styles.orderBox}>
        <View style={styles.orderInfoBox}>
          <Text style={styles.priceStyle}>
            <Text style={styles.price}>{`$${pitch.price}`} </Text>
            <Text style={styles.priceText}>per hour</Text>
          </Text>
          <Text style={styles.orderInfo}>{`14:00 - 15:00 | 16/05/2022`}</Text>
        </View>
        <Button mode="contained" onPress={orderHandler}>
          Order
        </Button>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginTop: 24,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    width: "100%",
  },
  headingBox: {
    borderBottomWidth: 2,
    borderBottomColor: "#EDF0F7",
    paddingBottom: 14,
  },
  pitchNameStyle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  pitchTypeStyle: {
    marginTop: 4,
    fontSize: 18,
  },
  bodyBox: {
    borderBottomWidth: 2,
    borderBottomColor: "#EDF0F7",
    paddingVertical: 20,
  },
  row: {
    flexDirection: "row",
  },
  icon: {
    fontSize: 20,
    marginRight: 8,
  },
  textH2: {
    fontSize: 18,
    marginBottom: 8,
  },
  textLight: {
    fontSize: 16,
    fontWeight: 200,
  },
  rootBox: {
    paddingVertical: 20,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 16,
  },
  orderBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    alignItems: "center",
  },
  orderInfoBox: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  orderInfo: {
    fontSize: 16,
  },
  priceStyle: {
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  priceText: {
    fontSize: 18,
    fontWeight: 200,
  },
});
