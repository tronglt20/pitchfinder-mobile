import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";
import { OrderAPI } from "../../services/OrderService";
import { useSelector } from "react-redux";
import {
	StarIcon as StarIconSolid,
	MapPinIcon as PinIconSolid,
	PhoneIcon as PhoneIconSolid,
	CalendarDaysIcon as CalendarIconSolid,
} from "react-native-heroicons/solid";
import { theme } from "../../core/theme";
import { FilterStoresAPI } from "../../services/PitchService";

export default function PitchDetailScreen({ navigation, route }) {
	const filterState = useSelector((state) => state.pitch.filterState);

	const { pitch } = route.params;

	const goBack = () => {
		navigation.navigate("PitchsScreen");
	};

	const orderHandler = async () => {
		var response = await OrderAPI(pitch.storeId, pitch.price, "");
		if (response.status == 200) {
			navigation.navigate("OrderConfirmScreen", { pitch: response.data });
		} else {
			console.log(`error`);
		}
	};

	function formatDate(selectedDate) {
		const date = new Date(selectedDate);

		const day = String(date.getDate()).padStart(2, "0");
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const year = date.getFullYear();

		return `${day}/${month}/${year}`;
	}

	function formatSelectedTime(selectedTime) {
		const { startTime, endTime } = selectedTime;
		return `${String(startTime).padStart(2, "0")}:00 - ${String(
			endTime
		).padStart(2, "0")}:00`;
	}

	return (
		<Background>
			<BackButton goBack={goBack} />
			<Text className="absolute top-2 text-2xl self-center text-primary font-bold">
				{pitch.name}
			</Text>
			<View className="mx-4">
				<Image
					source={require("../../assets/pitchImage.png")}
					className="w-full h-[300px] mt-4 rounded-lg"
				/>
				<View className="flex">
					<View className="flex flex-row">
						<Text className="text-lg font-bold text-primary">
							{pitch.type} Size 5
						</Text>
					</View>
					<View className="flex gap-1">
						<View className="flex flex-row items-center gap-1">
							<PinIconSolid size="20" color={theme.colors.primary} />
							<Text className="text-lg">
								Address: {pitch.address === "" ? "Da nang" : pitch.address}
							</Text>
						</View>
						<View className="flex flex-row items-center gap-1">
							<PhoneIconSolid size="20" color={theme.colors.primary} />
							<Text className="text-lg">
								Phone Number:
								{pitch.phoneNumber === ""
									? "No information"
									: pitch.phoneNumber}
							</Text>
						</View>
						<View className="flex flex-row items-center gap-1">
							<CalendarIconSolid size="20" color={theme.colors.primary} />
							<Text className="text-lg">{`${formatSelectedTime(
								filterState.selectedTime
							)} | ${formatDate(filterState.selectedDate)}`}</Text>
						</View>
					</View>
					<View className="pr-2 flex flex-row items-center justify-between">
						<View className="p-2 flex flex-row items-center gap-1">
							<View className="flex flex-row bg-secondary w-8 h-8 items-center rounded-full">
								<StarIconSolid size="12" color={theme.colors.primary} />
								<Text className="text-xs text-primary">{`${pitch.rating}/5`}</Text>
							</View>
							<Text className="text-lg pr-2">{`${pitch.price}vnđ`}/hour</Text>
						</View>
						<Button
							className="bg-primary"
							mode="contained"
							onPress={orderHandler}
						>
							Order
						</Button>
					</View>
				</View>
			</View>
		</Background>
	);
}
