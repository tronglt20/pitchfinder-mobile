import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../core/theme";

export default function Button({ mode, style, ...props }) {
	return (
		<PaperButton
			className="bg-secondary w-full py-1 my-2"
			style={[
				mode === "outlined" && { backgroundColor: theme.colors.surface },
				style,
			]}
			labelStyle={[
				styles.text,
				mode === "outlined" && { color: theme.colors.primary },
			]}
			mode={mode}
			{...props}
		/>
	);
}

const styles = StyleSheet.create({
	text: {
		fontWeight: "bold",
		fontSize: 15,
		lineHeight: 26,
	},
});
