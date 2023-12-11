import React, { useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { EmailValidator } from "../helpers/EmailValidator";
import { PasswordValidator } from "../helpers/PasswordValidator";
import { PasswordConfirmValidator } from "../helpers/PasswordConfirmValidator";
import { SignupAPI } from "../services/IAMService";

export default function SignupScreen({ navigation }) {
	const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });
	const [passwordConfirm, setPasswordConfirm] = useState({
		value: "",
		error: "",
	});

	const onSignUpPressed = async () => {
		const emailError = EmailValidator(email.value);
		const passwordError = PasswordValidator(password.value);
		const passwordConfirmError = PasswordConfirmValidator(
			password.value,
			passwordConfirm.value
		);
		if (emailError || passwordError || passwordConfirmError) {
			setEmail({ ...email, error: emailError });
			setPassword({ ...password, error: passwordError });
			setPasswordConfirm({ ...passwordConfirm, error: passwordConfirmError });

			return;
		}

		try {
			var response = await SignupAPI(
				email.value,
				password.value,
				passwordConfirm.value
			);

			if (response.status == 200) {
				Alert.alert("Success", "Account created successfully.", [
					{
						text: "OK",
						onPress: () => navigation.navigate("LoginScreen"),
					},
				]);
			}
		} catch {
			Alert.alert("Error", "Something went wrong. Please try again.", [
				{
					text: "OK",
					onPress: () => navigation.navigate("SignupScreen"),
				},
			]);
		}
	};

	return (
		<Background>
			<BackButton goBack={navigation.goBack} />
			<View className="flex h-screen mx-4 w-[95%] items-center self-center justify-center">
				<Logo />
				<Header>Create Account</Header>
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
				<View className="w-full relative">
					<View className="absolute z-10 bg-secondary px-3 rounded-xl self-start ml-5">
						<Text className="text-white text-center font-bold text-lg ">
							Confirm Password
						</Text>
					</View>
					<TextInput
						returnKeyType="done"
						value={passwordConfirm.value}
						onChangeText={(text) =>
							setPasswordConfirm({ value: text, error: "" })
						}
						error={!!passwordConfirm.error}
						errorText={passwordConfirm.error}
						secureTextEntry
					/>
				</View>
				<Button
					mode="contained"
					onPress={onSignUpPressed}
					style={{ marginTop: 24 }}
				>
					Sign Up
				</Button>
				<View className="flex flex-row mb-1">
					<Text>Already have an account? </Text>
					<TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
						<Text className="flex flex-row text-primary">Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Background>
	);
}
