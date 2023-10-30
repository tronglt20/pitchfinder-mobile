import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
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
import { theme } from "../core/theme";
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
	};

	return (
		<Background>
			<View className="flex h-full w-full items-center self-center justify-center">
				<BackButton goBack={navigation.goBack} />
				<Logo />
				<Header>Create Account</Header>
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
				<TextInput
					label="Confirm Password"
					returnKeyType="done"
					value={passwordConfirm.value}
					onChangeText={(text) =>
						setPasswordConfirm({ value: text, error: "" })
					}
					error={!!passwordConfirm.error}
					errorText={passwordConfirm.error}
					secureTextEntry
				/>
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
