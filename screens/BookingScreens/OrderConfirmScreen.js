import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { Button, Card } from "react-native-paper";
import Background from "../../components/Background";
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
		<>
			{data === null ? (
				<Background>
					<Text className="mt-3 text-2xl self-center text-primary font-bold">
						Order Confirmation
					</Text>
					<View className="min-h-[60vh] flex justify-between px-3 mt-2">
						<Text className="w-full text-justify">
							Please confirm your booking information below. You will not be
							able to make changes once your booking is confirmed!
						</Text>
						<Card className="p-5 bg-secondary  h-3/5 flex justify-between">
							<View className="flex mb-10">
								<Text className="text-2xl text-primary font-bold text-center">
									{pitch.storeName}
								</Text>
								<Text className="text-white mb-5 text-lg text-center">
									({pitch.pitchName})
								</Text>
							</View>
							<View className="flex mt-10 gap-7">
								<Text className="text-white">
									Address: {pitch.address === "" ? "Da nang" : pitch.address}
								</Text>
								<Text className="text-white">Type: {selectedType}</Text>
								<Text className="text-white">Duration: 19:00 - 20:00</Text>
								<Text className="text-white">Price: {pitch.price}vnđ</Text>
							</View>
						</Card>
						<View className="flex flex-row justify-between pt-6">
							<Button
								mode="contained"
								textColor="#00B14F"
								onPress={goBack}
								className="w-2/5 bg-white shadow-sm"
							>
								Back
							</Button>
							{showPaymentButton && (
								<Button
									textColor="#00B14F"
									className="bg-secondary w-2/5 shadow-sm"
									mode="contained"
									onPress={handlePayment}
								>
									Payment
								</Button>
							)}
						</View>
					</View>
				</Background>
			) : (
				<Background>
					{data && data.queryParams && (
						<View className="h-[70vh] flex justify-center items-center">
							{data.queryParams.resultCode === "0" ? (
								<View className="flex justify-center items-center">
									<Image
										source={require("../../assets/success.png")}
										className="w-40 h-40"
									/>
									<Text className="self-start mt-2 text-primary font-bold text-3xl">
										Order Successful!
									</Text>
									<Text className="self-start">Thank you for ordering!</Text>
									<Button
										mode="contained"
										textColor="#00B14F"
										onPress={goBack}
										className="w-[250px] mt-5 bg-secondary"
									>
										Back
									</Button>
								</View>
							) : (
								<View className="flex justify-center items-center">
									<Image
										source={require("../../assets/fail.png")}
										className="w-40 h-40"
									/>
									<Text className="text-red-500 self-start font-bold text-3xl">
										Order Failed!
									</Text>
									<Text>Please try again or contact customer support.</Text>
									<Button
										mode="contained"
										onPress={goBack}
										className="w-[250px] mt-5 bg-red-500"
									>
										Back
									</Button>
								</View>
							)}
						</View>
					)}
				</Background>
			)}
		</>
	);
}
