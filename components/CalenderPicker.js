import React from "react";
import { Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { theme } from "../core/theme";

export default function CalendarPickerComponent({ onSelect }) {
	const minDate = new Date();

	return (
		<View className="w-full rounded-xl shadow-sm">
			<Text className="font-bold pl-2 text-lg text-primary">
				Which date are you looking for?
			</Text>
			<View className="h-[360px]">
				<CalendarPicker
					minDate={minDate}
					todayTextStyle={{ color: "white" }}
					defaultColor={theme.colors.primary}
					todayBackgroundColor={theme.colors.backdrop}
					onDateChange={(date) => onSelect(date)}
					selectedDayColor={theme.colors.secondary}
					selectedDayTextColor={theme.colors.primary}
				/>
			</View>
		</View>
	);
}
