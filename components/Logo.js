import React from "react";
import { Image } from "react-native";

export default function Logo() {
	return (
		<Image source={require("../assets/logo.png")} className="mb-2 w-28 h-28" />
	);
}
