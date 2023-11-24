import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUserAPI } from "../services/IAMService";
import React, { useEffect, useState } from "react";
import { AuthActions } from "../stores/AuthReducer";
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import AccountContainer from "./AccountContainer";
import BookingContainer from "./BookingContainer";

const Stack = createNativeStackNavigator();

export default function AppContainer() {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuthenticated);
	const [shouldRender, setShouldRender] = useState(false);

	const getData = useCallback(async () => {
		try {
			const response = await CurrentUserAPI();
			setResponseData(response.data);
		} catch (error) {
			console.log("Get Data from Order got error");
		}
	}, []);

	useEffect(() => {
		var request = CurrentUserAPI();
		request
			.then((response) => {
				if (response.status === 200) {
					setShouldRender(true);
					dispatch(AuthActions.setCurrentUser(response));
				} else {
					setShouldRender(true);
					dispatch(AuthActions.logout());
				}
			})
			.catch(() => {
				setShouldRender(true);
			});
	}, [dispatch]);

	if (!shouldRender) {
		return null;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={isAuth ? "BookingContainer" : "StartScreen"}
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="StartScreen" component={StartScreen} />
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="SignupScreen" component={SignupScreen} />
				<Stack.Screen name="BookingContainer" component={BookingContainer} />
				<Stack.Screen name="AccountContainer" component={AccountContainer} />
			</Stack.Navigator>
			{/* {isAuth && <MenuBar />} */}
		</NavigationContainer>
	);
}
