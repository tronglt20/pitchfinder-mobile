import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { View } from "react-native";

export default function StartScreen({ navigation }) {
	return (
		<Background>
			<View className="flex h-full justify-center items-center">
				<Logo />
				<Header>Pitch Finder</Header>
				<Paragraph>Wellcome to start with your amazing application.</Paragraph>
				<Button
					mode="contained"
					onPress={() => navigation.navigate("LoginScreen")}
				>
					Login
				</Button>
				<Button
					mode="outlined"
					onPress={() => navigation.navigate("SignupScreen")}
				>
					Sign Up
				</Button>
			</View>
		</Background>
	);
}
