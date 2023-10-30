import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { theme } from "../core/theme";
import { Button } from "react-native-paper";
import {
	ChevronLeftIcon as LeftIconSolid,
	ChevronRightIcon as RightIconSolid,
} from "react-native-heroicons/solid";

export default function TimePicker({ onSelect }) {
	const [startTime, setStartTime] = useState(19);
	const [endTime, setEndTime] = useState(20);

	useEffect(() => {
		handleTimeSelection();
	}, []);

	const handlePrevButtonPress = () => {
		if (startTime === 0) {
			setStartTime(23);
			setEndTime(0);
		} else {
			setStartTime(startTime - 1);
			setEndTime(endTime - 1);
		}
		handleTimeSelection();
	};

	const handleNextButtonPress = () => {
		if (endTime === 24) {
			setStartTime(0);
			setEndTime(1);
		} else {
			setStartTime(startTime + 1);
			setEndTime(endTime + 1);
		}
		handleTimeSelection();
	};

	const formattedStartTime = startTime < 10 ? `0${startTime}` : startTime;
	const formattedEndTime = endTime < 10 ? `0${endTime}` : endTime;

	const handleTimeSelection = () => {
		const selectedTime = {
			startTime: formattedStartTime,
			endTime: formattedEndTime,
		};
		onSelect(selectedTime);
	};

	return (
		<View className="w-full px-3 py-2 mt-2 shadow-sm rounded-xl">
			<Text className="font-bold text-lg text-primary">Time Frame</Text>
			<View className="flex flex-row">
				<TouchableOpacity
					className="self-center rounded-3xl px-7 py-2 shadow-sm bg-white"
					onPress={handlePrevButtonPress}
				>
					<LeftIconSolid size="30" color="#00B14F" />
				</TouchableOpacity>
				<View className="flex flex-1">
					<Text className="text-center text-lg text-primary">
						{formattedStartTime}:00 - {formattedEndTime}:00
					</Text>
					<Text className="mt-1 text-center text-secondary">
						Rental will last 1 hour
					</Text>
				</View>
				<TouchableOpacity
					className="self-center rounded-3xl px-7 py-2 shadow-sm bg-white"
					onPress={handleNextButtonPress}
				>
					<RightIconSolid size="30" color="#00B14F" />
				</TouchableOpacity>
			</View>
		</View>
	);
}
