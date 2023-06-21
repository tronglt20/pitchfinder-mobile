import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import FilterOptionScreen from "../screens/FilterOptionScreen";
const Stack = createNativeStackNavigator();

export default function AppContainer() {
  const accessToken = useSelector((state) => state.auth.accessToken);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={accessToken ? "FilterOptionScreen" : "StartScreen"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen
          name="FilterOptionScreen"
          component={FilterOptionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
