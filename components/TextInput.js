import React from "react";
import { View, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { theme } from "../core/theme";

export default function TextInput({ errorText, description, ...props }) {
	return (
		<View className="w-full my-1">
			<Input
				className="bg-white py-1"
				selectionColor={theme.colors.secondary}
				underlineColor="transparent"
				mode="outlined"
				theme={{ colors: { primary: theme.colors.primary }, roundness: 30 }}
				{...props}
			/>
			{description && !errorText ? (
				<Text className="text-secondary">{description}</Text>
			) : null}
			{errorText ? (
				<Text className="text-red-500 pt-2">{errorText}</Text>
			) : null}
		</View>
	);
}
