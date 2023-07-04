import React from "react";
import Background from "../components/Background";
import { Text, List, Card, Title } from "react-native-paper";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import BackButton from "../components/BackButton";
import Icon from "react-native-vector-icons/FontAwesome";

export default function PitchsScreen({ navigation }) {
  const pitches = useSelector((state) => state.pitch.pitches);

  const goBack = () => {
    navigation.replace("FilterOptionScreen");
  };

  const renderPitchItem = (pitch) => {
    const handlePitchPress = () => {
      navigation.navigate("PitchDetailScreen", { pitch });
    };

    return (
      <TouchableOpacity onPress={handlePitchPress}>
        <Card key={pitch.storeId} style={styles.card}>
          <Card.Cover source={pitch.backgroundUrl} style={styles.cardImage} />
          <Card.Content style={styles.cardContent}>
            <View style={styles.headingStyle}>
              <Title style={styles.pitchName}>{pitch.name}</Title>
              <View style={styles.ratingContainer}>
                <Icon
                  name="star"
                  size={16}
                  color="#333"
                  style={styles.ratingIcon}
                />
                <Text style={styles.ratingText}>{`${pitch.rating}/5`}</Text>
              </View>
            </View>
            <Text>{`${pitch.type} - ${pitch.address}`}</Text>
            <Text style={styles.priceStyle}>{`${pitch.price} per hour`}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <Background>
      <BackButton goBack={goBack} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <List.Section>
          <List.Subheader style={styles.pitchHeading}>
            Suitable Pitchs
          </List.Subheader>
          <View style={styles.pitchList}>{pitches.map(renderPitchItem)}</View>
        </List.Section>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    minWidth: 300,
    height: 270,
  },
  cardImage: {
    height: 130,
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  ratingContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    width: 40,
    height: 40,
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
  },
  pitchHeading: {
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
    marginTop: 5,
  },
  pitchName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  ratingIcon: {
    marginRight: 4,
  },
  ratingText: {
    fontSize: 16,
  },
  pitchList: {
    marginVertical: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  headingStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  priceStyle: {
    marginTop: 12,
    fontSize: 16,
  },
});
