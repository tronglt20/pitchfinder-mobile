import React from "react";
import {
	ImageBackground,
	KeyboardAvoidingView,
	SafeAreaView,
} from "react-native";
import { theme } from "../core/theme";

export default function Background({ children }) {
	return (
		<ImageBackground className="flex bg-gray-50">
			<SafeAreaView className="flex w-full h-full mt-10 px-2">
				<KeyboardAvoidingView>{children}</KeyboardAvoidingView>
			</SafeAreaView>
		</ImageBackground>
	);
}
