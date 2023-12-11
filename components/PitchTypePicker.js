import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function PitchTypePicker({ onSelect }) {
	const [selectedSize, setSelectedSize] = useState("");
	const sizes = ["Size 5", "Size 7", "Size 11"];
	var dict = { "Size 5": 1, "Size 7": 2, "Size 11": 3 };
	const handleSizeSelection = (size) => {
		setSelectedSize(size);
		onSelect(dict[size]);
	};

	return (
		<View className="mx-4 bg-white h-[12vh] px-3 pt-2 mt-2 shadow-sm rounded-xl">
			<Text className="font-bold text-lg text-primary">Pitch Type</Text>
			<View className="flex mt-2 my-3 flex-row justify-between">
				{sizes.map((size) => (
					<TouchableOpacity
						key={size}
						className={`rounded-3xl px-7 py-3 shadow-sm ${
							selectedSize === size ? "bg-secondary" : "bg-white"
						}`}
						onPress={() => handleSizeSelection(size)}
					>
						<Text
							className={`${
								selectedSize === size
									? "text-primary font-bold"
									: "text-secondary"
							}`}
						>
							{size}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
}
