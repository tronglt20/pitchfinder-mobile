import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";
import { useSelector } from "react-redux";
import { ConfirmPaymentAPI } from "../../services/OrderService";
import { ConsumePaymentResultAPI } from "../../services/PaymentService";
import * as Linking from "expo-linking";

export default function OrderConfirmScreen({ navigation, route }) {
	const [data, setData] = useState(null);
	const [showPaymentButton, setShowPaymentButton] = useState(true);

	useEffect(() => {
		Linking.addEventListener("url", handleDeeplink);
	}, []);

	function handleDeeplink(event) {
		let data = Linking.parse(event.url);
		setData(data);

		ConsumePaymentResultAPI(
			data.queryParams.orderId,
			data.queryParams.message,
			data.queryParams.resultCode
		);
		if (data.queryParams.resultCode === "0") {
			setShowPaymentButton(false);
		}
	}

	const { pitch } = route.params;
	const selectedType = useSelector((state) => state.pitch.selectedType);

	const goBack = () => {
		if (showPaymentButton) {
			navigation.navigate("FilterOptionScreen");
		} else {
			navigation.navigate("PitchDetailScreen", { pitch });
		}
	};
	const handlePayment = async () => {
		var response = await ConfirmPaymentAPI();
		Linking.openURL(response.data.payUrl);
	};

	return (
		<Background>
			<Text className="mt-3 text-2xl self-center text-primary font-bold">
				Order Confirmation
			</Text>
			<View className="min-h-screen px-3 mt-2">
				<Text className="w-full text-justify">
					Please confirm your booking information below. You will not be able to
					make changes once your booking is confirmed!
				</Text>
				{data && data.queryParams && (
					<>
						{data.queryParams.resultCode === "0" ? (
							<Text>Order Successful!</Text>
						) : (
							<Text>
								Order Failed. Please try again or contact customer support.
							</Text>
						)}
					</>
				)}
				<Card className="p-3 bg-secondary h-2/4 flex flex-col">
					<Text className="text-2xl text-primary font-bold text-center">
						{pitch.storeName}
					</Text>
					<Text className="text-white text-lg text-center">
						({pitch.pitchName})
					</Text>
					<View className="flex">
						<Text className="text-white">
							Address: {pitch.address === "" ? "Da nang" : pitch.address}
						</Text>
					</View>
					<View className="flex pt-5">
						<Text className="text-white">Type: {selectedType}</Text>
					</View>
					<View className="flex flex-row justify-between">
						<View className="pt-5">
							<Text className="text-white">Duration: 19:00 - 20:00</Text>
						</View>
						<View className="pt-5">
							<Text className="text-white">Price: {pitch.price}vnđ</Text>
						</View>
					</View>
				</Card>
				<View className="flex flex-row justify-between pt-6">
					<Button mode="outlined" onPress={goBack} className="w-2/5">
						Back
					</Button>
					{showPaymentButton && (
						<Button
							className="bg-primary w-2/5"
							mode="contained"
							onPress={handlePayment}
						>
							Payment
						</Button>
					)}
				</View>
			</View>
		</Background>
	);
}
