import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { CurrentUserAPI } from "../services/IAMService";
import React, { useEffect, useState } from "react";
import { AuthActions } from "../stores/AuthReducer";
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import FilterOptionScreen from "../screens/FilterOptionScreen";
import PitchsScreen from "../screens/PitchsScreen";
import PitchDetailScreen from "../screens/PitchDetailScreen";
import OrderConfirmScreen from "../screens/OrderConfirmScreen";
import MomoPaymentScreen from "../screens/MomoPaymentScreen";

const Stack = createNativeStackNavigator();

export default function AppContainer() {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    var request = CurrentUserAPI();
    request
      .then((response) => {
        if (response.status == 200) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
          dispatch(AuthActions.logout());
        }
      })
      .finally(() => {
        setShouldRender(true);
      });
  }, []);

  if (!shouldRender) {
    return null; // Render nothing while waiting for the state to be updated
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuth ? "FilterOptionScreen" : "StartScreen"}
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
        <Stack.Screen name="PitchsScreen" component={PitchsScreen} />
        <Stack.Screen name="PitchDetailScreen" component={PitchDetailScreen} />
        <Stack.Screen
          name="OrderConfirmScreen"
          component={OrderConfirmScreen}
        />
        <Stack.Screen name="MomoPaymentScreen" component={MomoPaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
