import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { Ticket } from "heroicons";

export const MenuBar = () => {
	const navigation = useNavigation();
	const [selectedItem, setSelectedItem] = useState("BookingContainer");

	const handleMenuItemPress = (itemName) => {
		setSelectedItem(itemName);
		navigation.navigate(itemName);
	};

	return (
		<View className="flex bg-white flex-row h-16 shadow-2xl">
			<TouchableOpacity
				className={`flex-1 items-center justify-center bg-white shadow-2xl  ${
					selectedItem === "BookingContainer" ? "bg-secondary" : ""
				}`}
				onPress={() => handleMenuItemPress("BookingContainer")}
			>
				<View
					className={`${
						selectedItem === "BookingContainer" ? "text-primary" : ""
					}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
						/>
					</svg>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				className={`flex-1 items-center justify-center bg-white h-16 shadow-2xl ${
					selectedItem === "AccountContainer" ? "bg-secondary" : ""
				}`}
				onPress={() => handleMenuItemPress("AccountContainer")}
			>
				<Text
					className={`${
						selectedItem === "AccountContainer" ? "text-primary" : ""
					}`}
				>
					Account
				</Text>
			</TouchableOpacity>
		</View>
	);
};
