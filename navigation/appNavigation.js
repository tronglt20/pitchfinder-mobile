import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUserAPI } from "../services/IAMService";
import { AuthActions } from "../stores/AuthReducer";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LogBox, Text, View, Platform } from "react-native";

import LoginScreen from "../screens/LoginScreen";
import BookingContainer from "../container//BookingContainer";
import AccountContainer from "../container/AccountContainer";
import SignupScreen from "../screens/SignupScreen";
import StartScreen from "../screens/StartScreen";

import {
	HomeIcon as HomeOutline,
	UserCircleIcon as UserIconOutline,
} from "react-native-heroicons/outline";
import {
	HomeIcon as HomeSolid,
	UserCircleIcon as UserIconSolid,
} from "react-native-heroicons/solid";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == "ios";

LogBox.ignoreLogs([
	"Non-serializable values were found in the navigation state",
]);

export const AppNavigation = () => {
	const getAuth = useSelector((state) => state.auth.isAuthenticated);
	const isAuth = getAuth._j;
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={isAuth ? "Home" : "StartScreen"}
				screenOptions={{ contentStyle: { backgroundColor: "white" } }}
			>
				<Stack.Screen
					name="Home"
					options={{ headerShown: false }}
					component={HomeTabs}
				/>
				<Stack.Screen
					name="StartScreen"
					options={{ headerShown: false }}
					component={StartScreen}
				/>
				<Stack.Screen
					name="LoginScreen"
					options={{ headerShown: false }}
					component={LoginScreen}
				/>
				<Stack.Screen
					name="SignupScreen"
					options={{ headerShown: false }}
					component={SignupScreen}
				/>
				<Stack.Screen
					name="BookingContainer"
					options={{ headerShown: false }}
					component={BookingContainer}
				/>
				<Stack.Screen
					name="AccountContainer"
					options={{ headerShown: false }}
					component={AccountContainer}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const HomeTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarIcon: ({ focused }) => menuIcons(route, focused),
				tabBarStyle: {
					marginBottom: 10,
					height: 75,
					alignItems: "center",
					borderRadius: 100,
					marginHorizontal: 10,
					backgroundColor: "#002e27",
				},
				tabBarItemStyle: {
					marginTop: ios ? 30 : 0,
				},
			})}
		>
			<Tab.Screen name="BookingContainer" component={BookingContainer} />
			<Tab.Screen name="AccountContainer" component={AccountContainer} />
		</Tab.Navigator>
	);
};

const menuIcons = (route, focused) => {
	let icon;

	if (route.name === "BookingContainer") {
		icon = focused ? (
			<HomeSolid size="30" color="#00B14F" />
		) : (
			<HomeOutline size="30" strokeWidth={2} color="white" />
		);
	} else if (route.name === "AccountContainer") {
		icon = focused ? (
			<UserIconSolid size="30" color="#00B14F" />
		) : (
			<UserIconOutline size="30" strokeWidth={2} color="white" />
		);

		// } else if (route.name === "cart") {
		// 	icon = focused ? (
		// 		<BagSolid size="30" color={themeColors.bgLight} />
		// 	) : (
		// 		<BagOutline size="30" strokeWidth={2} color="white" />
		// 	);
	}

	let buttonClass = focused ? "bg-white shadow" : "";
	return (
		<View className={"flex items-center rounded-full p-3" + " " + buttonClass}>
			{icon}
		</View>
	);
};
