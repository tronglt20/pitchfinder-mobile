import React from "react";
import { TouchableOpacity } from "react-native";
import { ArrowLeftCircleIcon as ArrowIconOutline } from "react-native-heroicons/outline";
import { theme } from "../core/theme";

export default function BackButton({ goBack }) {
	return (
		<TouchableOpacity
			onPress={goBack}
			className="fixed w-fit z-10 top-2 left-2"
		>
			<ArrowIconOutline size="40" color={theme.colors.secondary} />
		</TouchableOpacity>
	);
}
