import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import IndexScreen from "../screens/AccountScreens/IndexScreen";

const Stack = createNativeStackNavigator();

export default function AccountContainer() {
  return (
    <Stack.Navigator
      initialRouteName={"IndexScreen"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IndexScreen" component={IndexScreen} />
    </Stack.Navigator>
  );
}
