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
import { theme } from "../core/theme";

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
			<View className="flex w-full h-full items-center self-center justify-center">
				<Logo />
				<Header>Welcome back.</Header>
				<TextInput
					label="Email"
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
				<TextInput
					label="Password"
					returnKeyType="done"
					value={password.value}
					onChangeText={(text) => setPassword({ value: text, error: "" })}
					error={!!password.error}
					errorText={password.error}
					secureTextEntry
				/>
				<Button mode="contained" onPress={onLoginPressed}>
					Login
				</Button>
				<View style={styles.row}>
					<Text>Don’t have an account? </Text>
					<TouchableOpacity onPress={() => navigation.replace("SignupScreen")}>
						<Text style={styles.link}>Sign up</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Background>
	);
}

const styles = StyleSheet.create({
	forgotPassword: {
		width: "100%",
		alignItems: "flex-end",
		marginBottom: 24,
	},
	row: {
		flexDirection: "row",
		marginTop: 4,
	},
	forgot: {
		fontSize: 13,
		color: theme.colors.secondary,
	},
	link: {
		fontWeight: "bold",
		color: theme.colors.primary,
	},
});
