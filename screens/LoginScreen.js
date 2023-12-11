import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { AuthActions } from "../stores/AuthReducer";
import { SigninAPI } from "../services/IAMService";
import { EmailValidator } from "../helpers/EmailValidator";

export default function LoginScreen({ navigation }) {
	const dispatch = useDispatch();
	const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });

	const onLoginPressed = async () => {
		const emailError = EmailValidator(email.value);
		if (emailError) {
			setEmail({ ...email, error: emailError });
			return;
		}
		try {
			const response = await SigninAPI(email.value, password.value);
			if (response && response.data && response.data.accessToken) {
				await AsyncStorage.setItem("accessToken", response.data.accessToken);
				await AsyncStorage.setItem("isAuthenticated", "true");
				dispatch(AuthActions.login(response.data));
				navigation.navigate("Home");
			} else {
				console.error("API call returned an unexpected response:", response);
			}
		} catch (error) {
			console.warn("Invalid Email or Password");
		}
	};

	return (
		<Background>
			<BackButton goBack={navigation.goBack} />
			<View className="flex mx-4 w-[95%] h-[80vh] items-center self-center justify-center">
				<Logo />
				<Header>Welcome back.</Header>
				<Text className="text-center">
					Use your credentials below and login to your account
				</Text>
				<View className="w-full relative">
					<View className="absolute z-10 bg-secondary px-2 rounded-xl self-start ml-5">
						<Text className="text-white text-center font-bold text-lg ">
							Email
						</Text>
					</View>
					<TextInput
						returnKeyType="next"
						value={email.value}
						onChangeText={(text) => setEmail({ value: text, error: "" })}
						error={!!email.error}
						errorText={email.error}
						autoCapitalize="none"
						autoCompleteType="email"
						textContentType="emailAddress"
						keyboardType="email-address"
					/>
				</View>
				<View className="w-full relative">
					<View className="absolute z-10 bg-secondary px-3 rounded-xl self-start ml-5">
						<Text className="text-white text-center font-bold text-lg ">
							Password
						</Text>
					</View>
					<TextInput
						returnKeyType="done"
						value={password.value}
						onChangeText={(text) => setPassword({ value: text, error: "" })}
						error={!!password.error}
						errorText={password.error}
						secureTextEntry
					/>
				</View>
				<Button mode="contained" onPress={onLoginPressed}>
					Login
				</Button>
				<View className="flex flex-row mt-2">
					<Text>Don’t have an account? </Text>
					<TouchableOpacity onPress={() => navigation.replace("SignupScreen")}>
						<Text className="font-bold text-primary">Sign up</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Background>
	);
}
