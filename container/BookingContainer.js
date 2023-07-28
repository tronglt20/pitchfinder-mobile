import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import FilterOptionScreen from "../screens/BookingScreens/FilterOptionScreen";
import PitchsScreen from "../screens/BookingScreens/PitchsScreen";
import PitchDetailScreen from "../screens/BookingScreens/PitchDetailScreen";
import OrderConfirmScreen from "../screens/BookingScreens/OrderConfirmScreen";

const Stack = createNativeStackNavigator();

export default function BookingContainer() {
  return (
    <Stack.Navigator
      initialRouteName={"FilterOptionScreen"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FilterOptionScreen" component={FilterOptionScreen} />
      <Stack.Screen name="PitchsScreen" component={PitchsScreen} />
      <Stack.Screen name="PitchDetailScreen" component={PitchDetailScreen} />
      <Stack.Screen name="OrderConfirmScreen" component={OrderConfirmScreen} />
    </Stack.Navigator>
  );
}
