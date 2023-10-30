import React from "react";
import {
	ImageBackground,
	KeyboardAvoidingView,
	SafeAreaView,
} from "react-native";
import { theme } from "../core/theme";

export default function Background({ children }) {
	return (
		<ImageBackground className="flex-1 bg-white">
			<SafeAreaView className="flex w-full mt-10 px-2">
				<KeyboardAvoidingView className="flex">{children}</KeyboardAvoidingView>
			</SafeAreaView>
		</ImageBackground>
	);
}
